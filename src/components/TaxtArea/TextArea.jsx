/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const TextArea = ({ onSave }) => {
  const [noteTitle, setNoteTitle] = useState('');
  const [noteText, setNoteText] = useState('');
  const [noteDate, setNoteDate] = useState('');

  const handleSave = async () => {
    try {
      if (!noteTitle.trim() || !noteText.trim() || !noteDate.trim()) {
        alert('Please enter both title, note, and date');
        return;
      }

      const response = await axios.post('https://react-notebook-server.vercel.app/note', {
        title: noteTitle,
        description: noteText,
        date: noteDate,
      });

      console.log('Note saved to MongoDB:', response.data);


      toast.success('Note saved successfully!', {
        position: toast.POSITION.BOTTOM_CENTER,
      });


      setNoteTitle('');
      setNoteText('');
      setNoteDate('');


      onSave(response.data);
    } catch (error) {
      console.error('Error saving note to MongoDB:', error);
      
    }
  };

  return (
    <>
      <div className='lg:flex gap-6 lg:mx-auto w-96'>
        <div className="lgL\:\\mb-4 text">
          <label className="flex items-center gap-2 text-sm font-bold mb-2 w-60">
            Title:
            <input
              type="text"
              className="input input-bordered input-primary w-full max-w-xs"
              value={noteTitle}
              onChange={(e) => setNoteTitle(e.target.value)}
            />
          </label>
        </div>

        <div className="mb-4">
          <label className="flex items-center gap-2  text-sm font-bold w-96">
            Date:
            <input
              type="date"
              className="input input-bordered input-primary w-40"
              value={noteDate}
              onChange={(e) => setNoteDate(e.target.value)}
            />
          </label>
        </div>
      </div>

      <div className="mb-4 w-[1280px] mx-auto">
        <label className="block  text-sm font-bold mb-2">
          <textarea
            className="textarea textarea-bordered border-blue-500 lg:min-w-[1280px] lg:h-[350px] mx-auto"
            placeholder="Write your notes...."
            value={noteText}
            onChange={(e) => setNoteText(e.target.value)}
          />
        </label>
      </div>

      <div className="flex justify-center">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          onClick={handleSave}
        >
          Save
        </button>
      </div>
    </>
  );
};

export default TextArea;





