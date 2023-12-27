/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Note = ({ notes }) => {
  const { _id, title, date, description } = notes;
  const [isNoteVisible, setIsNoteVisible] = useState(true);

  const handleDelete = () => {
    fetch(`https://react-notebook-server.vercel.app/note/${_id}`, {
      method: 'DELETE',
    })
      .then((res) => {
        if (res.ok) {
          return res.json();
        }
        throw new Error('Note deletion failed');
      })
      .then((data) => {
        console.log(data);
        alert('Note deleted successfully');
        setIsNoteVisible(false); // Set state to hide the note
      })
      .catch((error) => {
        console.error('Error deleting note:', error.message);
        alert('Error deleting note. Please try again.');
      });
  };




  return (
    <>
   

      {isNoteVisible && (
        <div className="card w-96 h-60 bg-primary text-primary-content">
          <div className="card-body">
            <h2 className="card-title">{title}</h2>
            <p>{date}</p>

            <p>
              {description.slice(0,100)} <span className="text-red-500">...Read more</span>
            </p>
          
            <div className="card-actions justify-end">
            <Link to={`/edit/${_id}`}>
            <button className="btn btn-sm">Edit Note</button>
            </Link>
              <button onClick={handleDelete} className="btn btn-sm">
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Note;
