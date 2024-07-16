// AddRecipe.js
import React, { useState } from 'react';
function AddRecipe({ onAddRecipe }) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState(null);
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        if (image) {
            formData.append('image', image);
        }
        onAddRecipe(formData);
        setTitle('');
        setDescription('');
        setImage(null);
    };
    return (
        <form className="form" onSubmit={handleSubmit}>
            <div className="form-inputs">
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
                <input
                    type="file"
                    onChange={(e) => setImage(e.target.files[0])}
                />
            </div>
            <div className="form-button">
                <button type="submit">Add Recipe</button>
            </div>
        </form>
    );
}
export default AddRecipe;
