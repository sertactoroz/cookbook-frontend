// App.js
import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import AddRecipe from './components/AddRecipe';
import Modal from './components/Modal';
import './App.css';
function App() {
  const [recipes, setRecipes] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  useEffect(() => {
    fetchRecipes();
  }, []);
  const fetchRecipes = async () => {
    try {
      const response = await fetch('https://16.171.13.155:8000/api/recipes/');
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
      const response = await fetch('https://16.171.13.155:8000/api/recipes/', {
        method: 'POST',
        body: formData,
      });
      if (!response.ok) {
        throw new Error('Failed to add recipe');
      }
      fetchRecipes();
    } catch (error) {
      console.error('Error adding recipe:', error);
    }
  };
  const deleteRecipe = async (recipeId) => {
    try {
      const response = await fetch(`https://16.171.13.155:8000/api/recipes/${recipeId}/`, {
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
  const openModal = (recipe) => {
    setSelectedRecipe(recipe);
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRecipe(null);
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookbook</h1>
      </header>
      <AddRecipe onAddRecipe={addRecipe} />
      <RecipeList recipes={recipes} onDeleteRecipe={deleteRecipe} onCardClick={openModal} />
      <Modal isOpen={isModalOpen} onClose={closeModal} recipe={selectedRecipe} />
    </div>
  );
}
export default App;
