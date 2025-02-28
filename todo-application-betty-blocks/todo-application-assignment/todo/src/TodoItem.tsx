import { useMutation } from '@apollo/client';
import React, { useState } from 'react';
import { COMPLETE_TODO } from './schema';
import { CompleteTodoMutation } from './generated';
import ConfirmationTodo from './ConfirmationTodo';

interface TodoItemProps {
  id: string;
  title: string;
  done: boolean;
}

function TodoItem({ id, title, done }: Readonly<TodoItemProps>) {
  const [showConfirmationTodo, setShowConfirmationTodo] = useState(false);
  const [completeTodo] =
    useMutation<CompleteTodoMutation>(COMPLETE_TODO);

  const clickHandler = (id: string) => {
    completeTodo({
      variables: {
        id,
      },
    }).then(() => {
      setShowConfirmationTodo(true);
    });;
  };

  const handleGoBack = () => {
    setShowConfirmationTodo(false);
  };

  return (
    <>
      <section className="todo-list-item" onClick={() => !done && clickHandler(id)}>
        <input type="checkbox" checked={done} name="" id="" />
        <i className="check" />
        <span className="todo-list-item-title">{title}</span>{' '}
      </section>
      {showConfirmationTodo && (
        <ConfirmationTodo
          message={`Todo "${title}" was completed!`}
          onGoBack={handleGoBack}
        />
      )}
    </>

  );
}

export default TodoItem;
