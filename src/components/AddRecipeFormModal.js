import React, { useState } from 'react';
import '../App.css'
const AddRecipeFormModal = ({ onAddRecipe, isOpen, onClose }) => {
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
        onClose();
    };
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
                <h2 className="modal-title App-header">Create New Recipe</h2>
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
                        <div className="form-button">
                            <button type="submit">Add Recipe</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};
export default AddRecipeFormModal;
