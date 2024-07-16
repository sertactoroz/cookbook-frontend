import React from 'react';
import '../App.css';
const RecipeCard = ({ recipe, onDelete, onCardClick }) => {
    const handleDelete = () => {
        onDelete(recipe.id);
    };
    return (
        <div className="recipe-card" onClick={() => onCardClick(recipe)}>
            {recipe.image && (
                <img src={recipe.image} alt={recipe.title} style={{ maxWidth: '100%', height: 'auto' }} />
            )}
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <button className="btn-danger" onClick={handleDelete}>X</button>
        </div>
    );
};
export default RecipeCard;
