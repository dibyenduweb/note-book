
/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Note from '../Note/Note';

const ViewNote = () => {
  const [data, setData] = useState([]);
  const [selectedMonth, setSelectedMonth] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://react-notebook-server.vercel.app/note');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []); 

  const filterData = selectedMonth
    ? data.filter((note) => new Date(note.date).toLocaleString('default', { month: 'long' }) === selectedMonth)
    : data;

  return (
    <div>
      <h1 className="text-4xl text-center text-red-600 font-bold">Notebook</h1>
      <Navbar />
     <div className="flex justify-center py-8">
     <select
        className="select select-accent text-black w-full max-w-xs "
        onChange={(e) => setSelectedMonth(e.target.value)}
        value={selectedMonth}
      >
        <option value="">
          Show all months
        </option>
        {Array.from(
          new Set(
            data.map((singleNote) =>
              new Date(singleNote.date).toLocaleString('default', { month: 'long' })
            )
          )
        ).map((uniqueMonth, index) => (
          <option key={index} value={uniqueMonth}>
            {uniqueMonth.charAt(0).toUpperCase() + uniqueMonth.slice(1)}
          </option>
        ))}
      </select>
     </div>

      <div className='grid grid-cols-3 lg:w-[1280px] mx-auto py-4 gap-4 h-full'>
        {filterData.map((notes) => (
          <Note key={notes._id} notes={notes}></Note>
        ))}
      </div>
    </div>
  );
};

export default ViewNote;
