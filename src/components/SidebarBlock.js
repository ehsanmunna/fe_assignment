import React from 'react';

const SidebarBlock = () => {
  return (
    // <>
    //   <select data-testid="select-subject">
    //   </select>
      
    // </>
    <div class="list-group">
    <a href="#" class="list-group-item list-group-item-action active" aria-current="true">
      The current link item
    </a>
    <a href="#" class="list-group-item list-group-item-action">University</a>
    <a href="#" class="list-group-item list-group-item-action">Dashboard</a>
    <a href="#" class="list-group-item list-group-item-action">Calendar</a>
    <a href="#" class="list-group-item list-group-item-action">Teachers</a>
    <a href="#" class="list-group-item list-group-item-action">Course</a>
    <a href="#" class="list-group-item list-group-item-action">Attendance</a>
    <a href="#" class="list-group-item list-group-item-action">Assignment</a>
  </div>
  )
}

export default SidebarBlock;