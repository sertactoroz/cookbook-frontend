import React from 'react';
import RecipeCard from './RecipeCard';
function RecipeList({ recipes, onDeleteRecipe, onCardClick }) {
    return (
        <div className="recipe-list">
            {recipes.map(recipe => (
                <RecipeCard key={recipe.id} recipe={recipe} onDelete={onDeleteRecipe} onCardClick={onCardClick} />
            ))}
        </div>
    );
}
export default RecipeList;
