import React, { useState } from "react";
import "./card.css";
import { useMutation } from "@apollo/client";
import { CREATE_TODO, LIST_TODOS } from "./schema";
import ConfirmDialog from "./ConfirmDialog";
import ConfirmationTodo from "./ConfirmationTodo";

function NewTodoCard({ setOpenModal }: { setOpenModal: (open: boolean) => void }) {
    const [createTodo] = useMutation(CREATE_TODO, {
        refetchQueries: [{ query: LIST_TODOS }],
    });

    const [newTodoTitle, setNewTodoTitle] = useState('');
    const [error, setError] = useState('');
    const [showConfirmDialog, setShowConfirmDialog] = useState(false);
    const [showConfirmationTodo, setShowConfirmationTodo] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (newTodoTitle.trim()) {
            setShowConfirmDialog(true);
        } else {
            setError('Title cannot be empty');
        }
    };

    const handleConfirm = () => {
        createTodo({
            variables: { title: newTodoTitle },
        }).then(() => {
            setShowConfirmationTodo(true);
            setShowConfirmDialog(false);
        });
    };

    const handleCancel = () => {
        setShowConfirmDialog(false);
    };

    const handleGoBack = () => {
        setShowConfirmationTodo(false);
        setOpenModal(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <section className="card-background">
                    <section className="card-container">
                        <section className="title">
                            <h1>New Todo</h1>
                            <input
                                className="input"
                                type="text"
                                value={newTodoTitle}
                                onChange={(e) => {
                                    setNewTodoTitle(e.target.value);
                                    setError('');
                                }}
                                placeholder="Add a new todo"
                            />
                            {error && <p className="error">{error}</p>}
                        </section>
                        <section className="footer">
                            <button
                                onClick={() => {
                                    setOpenModal(false);
                                }}
                                id="cancelBtn"
                            >
                                Cancel
                            </button>
                            <button type="submit">Submit</button>
                        </section>
                    </section>
                </section>
            </form>

            {showConfirmDialog && (
                <ConfirmDialog
                    onConfirm={handleConfirm}
                    onCancel={handleCancel}
                />
            )}

            {showConfirmationTodo && (
                <ConfirmationTodo
                    message="Todo item was added!"
                    onGoBack={handleGoBack}
                />
            )}
        </>
    );
}

export default NewTodoCard;