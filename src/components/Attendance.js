import React, { useState } from 'react';
import { cardPaddingBottom, paddingBottom } from '../constants';
import { MARKS } from '../__mocks__/data';

const Attendance = () => {
  const [selectedClient, setSelectedClient] = useState([1]);
  function handleSelectChange(event) {
    setSelectedClient(event.target.value);
  }

  return (
    <div data-testid="attendance-card" style={cardPaddingBottom}>
      {/* add your code here */}
      <div className="card">
        <div className="card-body">
          <div className="row">
            <div className="col-4" style={{ 'border-right': '1px solid gray' }}>
              <div className="text-bold">Attendance:</div>
              <div className="attendance-score">{MARKS[selectedClient].attendance}%</div>
              <div>Semester:</div>
              <div>
                <select class="form-select" value={selectedClient} onChange={handleSelectChange}>
                  {
                    MARKS.map(item => (
                      <option value={item.semester}>{item.semester}</option>
                    ))
                  }
                </select>
              </div>
            </div>
            <div className="col-8">
              <div className="row" style={paddingBottom}>
                <div className="col">
                  <div>Accounts</div>
                  <div>{MARKS[selectedClient].cgpa.accounts}/{MARKS[selectedClient].total.accounts}</div>
                </div>
                <div className="col">
                  <div>Inc. Tax</div>
                  <div>{MARKS[selectedClient].cgpa.inc_tax}/{MARKS[selectedClient].total.inc_tax}</div>
                </div>
              </div>
              <div className="row" style={paddingBottom}>
                <div className="col">
                  <div>Bus. Study</div>
                  <div>{MARKS[selectedClient].cgpa.bus_study}/{MARKS[selectedClient].total.bus_study}</div>
                </div>
                <div className="col text-warning" >
                  <div>French</div>
                  <div>{MARKS[selectedClient].cgpa.french}/{MARKS[selectedClient].total.french}</div>
                </div>
              </div>
              <div className="row" style={paddingBottom}>
                <div className="col">
                  <div>Economics</div>
                  <div>{MARKS[selectedClient].cgpa.economics}/{MARKS[selectedClient].total.economics}</div>
                </div>
                <div className="col">
                  <div>Com Skill</div>
                  <div>{MARKS[selectedClient].cgpa.com_skill}/{MARKS[selectedClient].total.com_skill}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Attendance