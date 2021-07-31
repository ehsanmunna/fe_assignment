import React from 'react';

const SidebarBlock = () => {
  return (
    // <>
    //   <select data-testid="select-subject">
    //   </select>
      
    // </>
    <div className="list-group">
    <a href="#" className="list-group-item list-group-item-action active" aria-current="true">
      The current link item
    </a>
    <a href="#" className="list-group-item list-group-item-action">University</a>
    <a href="#" className="list-group-item list-group-item-action">Dashboard</a>
    <a href="#" className="list-group-item list-group-item-action">Calendar</a>
    <a href="#" className="list-group-item list-group-item-action">Teachers</a>
    <a href="#" className="list-group-item list-group-item-action">Course</a>
    <a href="#" className="list-group-item list-group-item-action">Attendance</a>
    <a href="#" className="list-group-item list-group-item-action">Assignment</a>
  </div>
  )
}

export default SidebarBlock;