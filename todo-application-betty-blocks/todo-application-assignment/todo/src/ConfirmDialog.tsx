import React from "react";
import "./TodoList.css";

interface ConfirmDialogProps {
    onConfirm: () => void;
    onCancel: () => void;
}

function ConfirmDialog({ onConfirm, onCancel }: ConfirmDialogProps) {
    return (
        <section className="card-background">
            <section className="card-container">
                <section className="title">
                    <h1>Confirm</h1>
                </section>
                <section className="body">
                    <p>Are you sure you want to add this todo?</p>
                </section>
                <section className="footer">
                    <button onClick={onCancel} id="cancelBtn">Cancel</button>
                    <button className="warning" onClick={onConfirm}>Confirm</button>
                </section>
            </section>
        </section>
    );
}

export default ConfirmDialog;