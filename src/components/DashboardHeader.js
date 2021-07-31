import React from 'react';

const DashboardHeader = () => {
  return (
    <>
      <select data-testid="select-subject">
      </select>
      <div className='container'>
    <div className="row">
      <div className="col-2">
        <h1>Dashboard</h1>
      </div>
      <div className="col-10">
        Update Section
      </div>
    </div>
  </div>
    </>
    
    
  )
}

export default DashboardHeader;