/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

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
        toast('Note deleted successfully');
        setIsNoteVisible(false); 
      })
      .catch((error) => {
        console.error('Error deleting note:', error.message);
        toast('Error deleting note. Please try again.');
      });
  };




  return (
    <>
   

      {isNoteVisible && (
        <div className="card w-96 h-60 bg-blue-800 text-primary-content">
          <div className="card-body">
            <h2 className="card-title text-2xl">{title}</h2>
            <p className='text-sm'>{date}</p>

            <p>
              {description.slice(0,100)}
            </p>
          
            <div className="card-actions justify-end">
            <Link to={`/edit/${_id}`}>
            <button className="btn btn-sm">View & Edit</button>
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
