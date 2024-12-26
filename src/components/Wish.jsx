import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import Font Awesome

function Wish(props) {
  const [isEditing, setIsEditing] = useState(false); // State to toggle between view and edit mode
  const [editText, setEditText] = useState(props.item); // Store the text to be edited
  const [isChecked, setIsChecked] = useState(false); // State for the checkbox (checked or unchecked)

  const handleEditClick = () => {
    setIsEditing(true); // Enable editing mode
  };

  const handleSaveClick = () => {
    props.updateItem(props.index, editText); // Update the item with the new text
    setIsEditing(false); // Disable editing mode
  };

  const handleChange = (e) => {
    setEditText(e.target.value); // Update the text as user types
  };

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked); // Toggle the checkbox state
  };

  return (
    <li className={`list-item ${isChecked ? 'checked' : ''}`}> {/* Add the conditionally applied 'checked' class here */}
      <input
        type="checkbox"
        checked={isChecked}
        onChange={handleCheckboxChange} // Handle the checkbox change
        className="check-box"
      />
      {isEditing ? (
        <>
          <input
            type="text"
            value={editText}
            onChange={handleChange}
            onBlur={handleSaveClick} // Save when the input field loses focus
            autoFocus
          />
          <button onClick={handleSaveClick}>Save</button> {/* Show the Save button when in editing mode */}
        </>
      ) : (
        <>
          {props.item}
          <span className="icons">
            <i
              className="fa-solid fa-trash"
              onClick={() => props.deleteItem(props.index)} // Delete the item
            ></i>
            <i
              className="fa-solid fa-edit"
              onClick={handleEditClick} // Enable editing when clicked
            ></i>
          </span>
        </>
      )}
    </li>
  );
}

export default Wish;
