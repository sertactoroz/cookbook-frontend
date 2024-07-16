import React from 'react';
function RecipeCard({ recipe }) {
    return (
        <div className="recipe-card">
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            {/* more  details */}
        </div>
    );
}
export default RecipeCard;