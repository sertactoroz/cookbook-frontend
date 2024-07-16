import React, { useState } from 'react';
function AddRecipe({ onAddRecipe }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        onAddRecipe({ title, description });
        setTitle('');
        setDescription('');
    };
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                placeholder="Recipe Title"
                required
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Recipe Description"
                required
            />
            <button type="submit">Add Recipe</button>
        </form>
    );
}
export default AddRecipe;