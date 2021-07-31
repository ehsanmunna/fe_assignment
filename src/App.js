import React from 'react'
import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className='container'>
        <div className="row">
          <div className="col-2">sidebar</div>
          <div className="col-10">dashboard</div>
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
