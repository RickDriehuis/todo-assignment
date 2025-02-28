import React from "react";
import "./TodoList.css";

interface ConfirmationTodoProps {
    message: string;
    onGoBack: () => void;
}

function ConfirmationTodo({ message, onGoBack }: ConfirmationTodoProps) {
    return (
        <section className="card-background">
            <section className="card-container">
                <section className="title">
                    <h1>Successful Request</h1>
                </section>
                <section className="body">
                    <p>{message}</p>
                </section>
                <section className="footer">
                    <button onClick={onGoBack}>Go back</button>
                </section>
            </section>
        </section>
    );
}

export default ConfirmationTodo;