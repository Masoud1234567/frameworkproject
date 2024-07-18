// src/pages/Admin.js

import React, { useState, useEffect } from 'react';
import axios from 'axios';

const AdminTable = () => {
  const [teachers, setTeachers] = useState([]);
  const [students, setStudents] = useState([]);
  const [newTeacher, setNewTeacher] = useState({ username: '', email: '', regnumber: '' });

  useEffect(() => {
    fetchTeachers();
    fetchStudents();
  }, []);

  const fetchTeachers = async () => {
    try {
      const response = await axios.get('http://localhost:4500/api/v1/teacher/get');
      setTeachers(response.data);
    } catch (error) {
      console.error("There was an error fetching the teachers!", error);
    }
  };

  const fetchStudents = async () => {
    try {
      const response = await axios.get('http://localhost:4500/api/v1/stud/get-student');
      setStudents(response.data);
    } catch (error) {
      console.error("There was an error fetching the students!", error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewTeacher({ ...newTeacher, [name]: value });
  };

  const addTeacher = async () => {
    try {
      await axios.post('http://localhost:4500/api/v1/teacher/post', newTeacher);
      fetchTeachers();
    } catch (error) {
      console.error("There was an error adding the teacher!", error);
    }
  };

  const deleteTeacher = async (id) => {
    try {
      await axios.delete(`http://localhost:4500/api/v1/teacher/delete/${id}`);
      fetchTeachers();
    } catch (error) {
      console.error("There was an error deleting the teacher!", error);
    }
  };

  const updateTeacher = async (id) => {
    try {
      await axios.patch(`http://localhost:4500/api/v1/teacher/update/${id}`, newTeacher);
      fetchTeachers();
    } catch (error) {
      console.error("There was an error updating the teacher!", error);
    }
  };

  return (
    <div>
      <h2>Manage Teachers</h2>
      <input name="username" placeholder="Username" onChange={handleInputChange} />
      <input name="email" placeholder="Email" onChange={handleInputChange} />
      <input name="regnumber" placeholder="Reg Number" onChange={handleInputChange} />
      <button onClick={addTeacher}>Add Teacher</button>

      <ul>
        {teachers.map((teacher) => (
          <li key={teacher.id}>
            {teacher.username} - {teacher.email} - {teacher.regnumber}
            <button onClick={() => deleteTeacher(teacher.id)}>Delete</button>
            <button onClick={() => updateTeacher(teacher.id)}>Update</button>
          </li>
        ))}
      </ul>

      <h2>Students Attendance</h2>
      <ul>
        {students.map((student) => (
          <li key={student.StudId}>
            {student.studName} - {student.email} - {student.regNumber}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminTable;
