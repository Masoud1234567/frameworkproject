// src/App.js

import React from 'react';
import './App.css'; // Import your CSS file for styling
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import necessary components from react-router-dom

import CreateAccount from './pages/CreateAccount';
import Dashboard from './pages/Dashboard';
import AdminTable from './pages/Admin';
import Home from './pages/Home';
import About from './pages/About';
import StudentAttendance from './pages/StudentAttendance'; // Ensure this path is correct
import CourseList from './pages/CourseList';
import Schedule from './pages/Schedule';
import Loginform from './pages/Loginform';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/dashboard" element={<Dashboard/>} /> 
        <Route path="/home" element={<Home/>} /> 
        <Route path="/admin" element={<AdminTable/>} /> 
        <Route path="/create" element={<CreateAccount />} /> 
        <Route path="/" element={<Loginform />} /> 
        <Route path="/about" element={<About/>} />
        <Route path="/courses" element={<CourseList/>} />
        <Route path="/schedule" element={<Schedule/>} />
        <Route path="/student" element={<StudentAttendance />} /> {/* Add this line */}
      </Routes>
    </Router>
  );
};

export default App;
