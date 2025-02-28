/* eslint-disable array-callback-return */
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import TodoItem from './TodoItem';
import { LIST_TODOS } from './schema';
import { Query } from './generated';
import NewTodoCard from './NewTodoCard';
import './TodoList.css'

function TodoList() {
  const { loading, error, data } = useQuery<Query>(LIST_TODOS);
  const [newTodoCard, setNewTodoCard] = useState(false);
  const [filter, setFilter] = useState<'all' | 'complete' | 'incomplete'>('all');

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  const noTodosMessage = data?.todos.length === 0 ? <p style={{ color: 'white' }}>No todos found!</p> : null;

  const filteredTodos = data?.todos.filter(todo => {
    if (filter === 'all') return todo;
    if (filter === 'complete') return todo.done;
    if (filter === 'incomplete') return !todo.done;
  });

  return (
    <section className="todo-list">
      <section className='radiobuttons'>
        <label>
          <input
            type="radio"
            value="all"
            checked={filter === 'all'}
            onChange={() => setFilter('all')}
          />
          All
        </label>
        <label>
          <input
            type="radio"
            value="incomplete"
            checked={filter === 'incomplete'}
            onChange={() => setFilter('incomplete')}
          />
          Incomplete
        </label>
        <label>
          <input
            type="radio"
            value="complete"
            checked={filter === 'complete'}
            onChange={() => setFilter('complete')}
          />
          Complete
        </label>
      </section>
      {noTodosMessage}
      {filteredTodos?.map(({ id, title, done }) => (
        <TodoItem id={id} title={title} done={done} key={`todo-${id}`} />
      ))}
      <button className='button' onClick={() => setNewTodoCard(true)}>Add Todo</button>
      {newTodoCard && <NewTodoCard setOpenModal={setNewTodoCard} />}
    </section>
  );
}

export default TodoList;
