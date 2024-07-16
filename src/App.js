import React, { useState, useEffect } from 'react';
import RecipeList from './components/RecipeList';
import RecipeCard from './components/RecipeCard';
import AddRecipe from './components/AddRecipe';
import './App.css';
function App() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    // Fetch recipes from backend API
    fetchRecipes();
  }, []);
  const fetchRecipes = async () => {
    // Implement API call to fetch recipes
  };
  const addRecipe = async (newRecipe) => {
    // Implement API call to add a new recipe
  };
  return (
    <div className="App">
      <header className="App-header">
        <h1>Cookbook</h1>
      </header>
      <AddRecipe onAddRecipe={addRecipe} />
      <RecipeList recipes={recipes} />
    </div>
  );
}
export default App;