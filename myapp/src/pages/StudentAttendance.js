// src/pages/StudentAttendance.js

import React, { useState } from 'react';
import axios from 'axios';

const StudentAttendance = () => {
  const [newStudent, setNewStudent] = useState({ studName: '', email: '', regNumber: '' });
  const [message, setMessage] = useState('');

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent({ ...newStudent, [name]: value });
  };

  const addStudent = async () => {
    try {
      await axios.post('http://localhost:4500/api/v1/stud/post', newStudent);
      setMessage('Student attendance submitted successfully!');
    } catch (error) {
      setMessage('There was an error adding the student!');
      console.error("There was an error adding the student!", error);
    }
  };

  return (
    <div>
      <h2>Student Attendance</h2>
      <input name="studName" placeholder="Name" onChange={handleInputChange} />
      <input name="email" placeholder="Email" onChange={handleInputChange} />
      <input name="regNumber" placeholder="Reg Number" onChange={handleInputChange} />
      <button onClick={addStudent}>Submit Attendance</button>
      <p>{message}</p>
    </div>
  );
};

export default StudentAttendance;
