import React from 'react'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import SidebarBlock from './components/SidebarBlock';
import DashboardHeader from './components/DashboardHeader';
import AttendanceBlock from './components/AttendanceBlock';
import PerformanceBlock from './components/PerformanceBlock';
import CalendarBlock from './components/CalendarBlock';
import AssignmentBlock from './components/AssignmentBlock';
import UploadBlock from './components/UploadBlock';

function App() {
  return (
    <div className="App container-background">
      <div className='container'>
        <div className="row">
          <div className="col-2">
            <SidebarBlock />
          </div>
          <div className="col-10">
              <DashboardHeader />
              <div className="row">
                <div className="col">
                  <div>
                    <AttendanceBlock/>
                  </div>
                  <div>
                    <PerformanceBlock/>
                  </div>
                </div>
                <div className="col">
                  <CalendarBlock/>
                </div>
              </div>
              <div className="row">
                <div className="col-8">
                  <AssignmentBlock/>
                </div>
                <div className="col">
                  <UploadBlock/>
                </div>
              </div>
          </div>
        </div>
      </div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Before getting started please go through the FE Assignment Instruction.pdf</p>
        <p>Do not alter the given mock tempering with it won't give the required test results</p>
        <p>Do not remove the test-id added in the components</p>
        <p>Reuse the test-id tagged elements and the given mock data for developing the UI elements</p>
        <p>Keep all your UI elements under the components folder</p>
        <p>You can add additional test cases to increase the code coverage</p>
      </header> */}
    </div>
  );
}

export default App;
