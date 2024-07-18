import React from 'react';
import { Link } from 'react-router-dom';



const CourseSchedule = () => {
  return (
   <div className='list-course'>
    <div className="card">
            <h3>BITAM</h3>
            <p>Barchelor of Information Technology and Management.</p>
            <Link to="/schedule" className="card-link">View Schedule</Link>
          </div>

          <div className="card">
            <h3>BCS</h3>
            <p>Barchelor of Computer Science.</p>
            <Link to="/schedule" className="card-link">View Schedule</Link>
          </div>
          </div>
             
  );
};

export default CourseSchedule;
