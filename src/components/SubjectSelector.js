import React from 'react';
import { ASSIGNMENTS } from '../__mocks__/data';

const SubjectSelector = () => {
  return (
    <div>
      {/* add your code here */}
      <select class="form-select" aria-label="Default select example">
        <option selected>Select Subject</option>
        {
          ASSIGNMENTS.map(item => (
            <option value="{item.subject}">{item.subject}</option>
          ))
        }
      </select>
    </div>
  )
}

export default SubjectSelector