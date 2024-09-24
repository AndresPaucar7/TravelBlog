import React from 'react';
import './BlogModal.css';

const BlogModal = ({ isOpen, onClose, title, story, imageUrl, isAddStoryModal, setCurrentStory }) => {
  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCurrentStory(prevStory => ({ ...prevStory, [name]: value }));
  };

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        {isAddStoryModal ? (
          <>
            <h2>Add Your Story</h2>
            <div>
              <label htmlFor="title">Title:</label>
              <input 
                type="text" 
                id="title" 
                name="title" 
                value={title} 
                onChange={handleInputChange} 
                placeholder="Enter the title of your story"
              />
            </div>
            <div>
              <label htmlFor="story">Story:</label>
              <textarea 
                id="story" 
                name="story" 
                value={story} 
                onChange={handleInputChange} 
                placeholder="Share your story"
              />
            </div>
            <div>
              <label htmlFor="imageUrl">Image URL:</label>
              <input 
                type="text" 
                id="imageUrl" 
                name="imageUrl" 
                value={imageUrl} 
                onChange={handleInputChange} 
                placeholder="Enter an image URL"
              />
            </div>
          </>
        ) : (
          <>
            <h2>{title}</h2>
            <img src={imageUrl} alt={title} className="modal-image" />
            <p>{story}</p>
          </>
        )}
        <button onClick={onClose}>Save</button>
      </div>
    </div>
  );
};

export default BlogModal;
