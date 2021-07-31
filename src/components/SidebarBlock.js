import React from 'react';

const SidebarBlock = () => {
  return (
    <>
      <select data-testid="select-subject">
      </select>
      <div className="list-group">
        <a href="#" className="list-group-item list-group-item-action">
          <span className="list-border">University</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <span className="list-border text-bold">Dashboard</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <span className="list-border">Calendar</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <span>Teachers</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <span>Course</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <span className="list-border">Attendance</span>
        </a>
        <a href="#" className="list-group-item list-group-item-action">
          <span className="list-border">Assignment</span>
        </a>
      </div>
    </>

  )
}

export default SidebarBlock;