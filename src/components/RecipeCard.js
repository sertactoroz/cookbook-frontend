import React from 'react';
const RecipeCard = ({ recipe, onDelete, onCardClick }) => {
    const handleDelete = (e) => {
        e.stopPropagation();
        const isConfirmed = window.confirm("Are you sure you want to delete this recipe?");
        if (isConfirmed) {
            onDelete(recipe.id);
        }
    };
    return (
        <div className="recipe-card" onClick={() => onCardClick(recipe)}>
            {recipe.image && (
                <div className="image-container">
                    <img src={recipe.image} alt={recipe.title} />
                </div>
            )}
            <h2>{recipe.title}</h2>
            <p className="recipe-description">{recipe.description}</p>
            <button className="btn-danger" onClick={handleDelete}> &times; </button>
        </div>
    );
};
export default RecipeCard;
