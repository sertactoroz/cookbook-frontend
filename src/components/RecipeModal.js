import React from 'react';
import '../Modal.css';
const RecipeModal = ({ isOpen, onClose, recipe }) => {
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
                {recipe && recipe.image && (
                    <img src={recipe.image} alt={recipe.title} className="modal-image" />)}
                {recipe && (
                    <>
                        <h2>{recipe.title}</h2>
                        <p className="modal-description">{recipe.description}</p>
                        <p className="recipe-info">Created At: {new Date(recipe.created_at).toLocaleString()}</p>
                    </>
                )}
            </div>
        </div>
    );
};
export default RecipeModal;
