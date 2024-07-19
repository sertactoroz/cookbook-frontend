import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipeFormModal from './components/AddRecipeFormModal';
import RecipeModal from './components/RecipeModal';
import './App.css';
function App() {
  const [recipes, setRecipes] = useState([]);
  const [isAddRecipeModalOpen, setIsAddRecipeModalOpen] = useState(false);
  const [isRecipeModalOpen, setIsRecipeModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  useEffect(() => {
    fetchRecipes();
  }, []);
  const fetchRecipes = async () => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/recipes/`);
      if (!response.ok) {
        throw new Error('Failed to fetch recipes');
      }
      const data = await response.json();
      setRecipes(data);
    } catch (error) {
      console.error('Error fetching recipes:', error);
    }
  };
  const addRecipe = async (formData) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/recipes/`, {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to add recipe');
      }
      fetchRecipes();
      setIsAddRecipeModalOpen(false);
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };
  const deleteRecipe = async (recipeId) => {
    try {
      const response = await fetch(`${process.env.REACT_APP_API_URL}/api/recipes/${recipeId}/`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Failed to delete recipe');
      }
      fetchRecipes();
    } catch (error) {
      console.error('Error deleting recipe:', error);
    }
  };
  const openRecipeModal = (recipe) => {
    setSelectedRecipe(recipe);
    setIsRecipeModalOpen(true);
  };
  const closeRecipeModal = () => {
    setIsRecipeModalOpen(false);
    setSelectedRecipe(null);
  };
  const openAddRecipeModal = () => {
    setIsAddRecipeModalOpen(true);
  };
  const closeAddRecipeModal = () => {
    setIsAddRecipeModalOpen(false);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookbook</h1>
      </header>
      <button className="add-recipe-button" onClick={openAddRecipeModal}>
        Add Recipe
      </button>
      <RecipeList recipes={recipes} onDeleteRecipe={deleteRecipe} onCardClick={openRecipeModal} />
      <RecipeModal isOpen={isRecipeModalOpen} onClose={closeRecipeModal} recipe={selectedRecipe} />
      <AddRecipeFormModal isOpen={isAddRecipeModalOpen} onClose={closeAddRecipeModal} onAddRecipe={addRecipe} />
    </div>
  );
}
export default App;
