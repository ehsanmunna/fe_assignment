import React from 'react';
import { ASSIGNMENTS } from "../../src/__mocks__/data";
import SubjectSelector from './SubjectSelector';
const AssignmentBlock = () => {

  return (
    <>
      <select data-testid="select-subject">
      </select>
      {/* your table section should be added here */}
      <div className="card">
        <div className="card-header">
          <div className="row">
            <div className="col-3">
              Assignment
            </div> 
            <div className="col-4">
              <SubjectSelector/>
            </div>
          </div>
        </div>
        <div className="card-body card-height">
        <table class="table table-striped">
          <thead>
            <tr>
              <th>Subject</th>
              <th>Teacher</th>
              <th>Status</th>
              <th>Submission Date</th>
            </tr>
          </thead>
          <tbody>
            {
              ASSIGNMENTS.map(item => (
                <tr>
                  <td>{item.subject}</td>
                  <td>{item.teachers}</td>
                  {/* <td>{item.status}</td> */}
                  <td><span className="classFn(item.status)">{item.status}</span></td>
                  <td>{item.date}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
        </div>
      </div>
    </>
  )
}

export default AssignmentBlock;