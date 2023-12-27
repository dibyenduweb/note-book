/* eslint-disable no-unused-vars */

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../Navbar/Navbar';
import Note from '../Note/Note';

const ViewNote = () => {
  const [data, setData] = useState([]);

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

  

  return (
    <div>
     
      <h1 className="text-4xl text-center text-red-600 text-bold">Notebook</h1>
      <Navbar />
      <select className="select select-accent text-black w-full max-w-xs">

          <option disabled selected>Select date</option>
          <option>{data.date}</option>
          </select>

      <div className='grid grid-cols-3 lg:w-[1280px] mx-auto py-4 gap-4 h-full'>
        
      {data.map((notes) => (
        
         
        <Note key={notes._id} notes={notes}></Note>
      ))}
      </div>
    </div>
  );
};

export default ViewNote;

