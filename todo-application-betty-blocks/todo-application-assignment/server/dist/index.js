import 'dotenv/config';
import path, { join } from 'path';
import sqlite3 from 'sqlite3';
import { ApolloServer } from '@apollo/server';
import { open } from 'sqlite';
import { fileURLToPath } from 'url';
import { readFileSync } from 'fs';
import { startStandaloneServer } from '@apollo/server/standalone';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const { DATABASE, PORT } = process.env;
const resolvers = {
    Query: {
        todos: async (_parent, _args, { database }) => {
            const todos = await database.all('SELECT `id`, `title`, `done` FROM `todos`');
            return todos;
        },
    },
    Mutation: {
        createTodo: async (_parent, { title }, { database }) => {
            const { lastID: id } = await database.run('INSERT INTO `todos` (`title`, `done`) VALUES (?, ?)', title, false);
            return {
                id: id.toString(),
                title,
                done: false,
            };
        },
        completeTodo: async (_parent, { id }, { database }) => {
            await database.run('UPDATE `todos` SET `done` = 1 WHERE `id` = ?', id);
            const todo = await database.get('SELECT `id`, `title`, `done` from `todos` WHERE `id` = ?', id);
            return todo;
        },
        deleteTodo: async (_parent, { id }, { database }) => {
            const result = await database.run('DELETE FROM `todos` WHERE `id` = ?', id);
            return result.changes > 0; // Returns true if a row was deleted
        },
    },
};
(async () => {
    const server = new ApolloServer({
        typeDefs: readFileSync(join(__dirname, '../priv/schema.graphql'), 'utf-8'),
        resolvers,
    });
    const { url } = await startStandaloneServer(server, {
        context: async () => {
            const database = await open({
                filename: DATABASE,
                driver: sqlite3.Database,
            });
            await database.exec('CREATE TABLE IF NOT EXISTS todos (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR(255) NOT NULL, done TINYINT(1) NOT NULL DEFAULT 0);');
            return {
                database,
            };
        },
        listen: {
            port: Number(PORT),
        },
    });
    console.log(`🚀 Server ready at ${url}`);
})();
