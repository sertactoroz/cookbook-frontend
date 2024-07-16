import React from 'react';
import '../Modal.css';
const Modal = ({ isOpen, onClose, recipe }) => {
    if (!isOpen) return null;
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            onClose();
        }
    };
    return (
        <div className="modal-overlay" onClick={handleOverlayClick}>
            <div className="modal-content">
                <span className="close-button" onClick={onClose}>&times;</span>
                {recipe.image && (
                    <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%', height: 'auto' }} />
                )}
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
                <p>Created At: {new Date(recipe.created_at).toLocaleString()}</p>
            </div>
        </div>
    );
};
export default Modal;
