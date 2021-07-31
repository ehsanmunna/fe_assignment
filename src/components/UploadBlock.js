import React from 'react';
import SubjectSelector from './SubjectSelector';

const UploadBlock = () => {
  return (
    <>
      <select data-testid="select-subject">
      </select>
      <div className="card">
        <div className="card-header text-start">
          Upload Assignment
        </div>
        <div className="card-body">
          <div className="upload-area">
            <div>
              <button class="btn btn-secondary btn-sm" type="button">
                Attach
              </button>
            </div>
            <div>
              or drop file here, pdf or word doc.
            </div>
          </div>
        </div>
        <div className="card-footer">
          <div className="row">
            <div className="col">
            <SubjectSelector />
            </div>
            <div className="col">
            <button class="btn btn-primary btn-sm" type="button">Upload &amp; Submit</button>
            </div>
          </div>
          
        </div>
      </div>
    </>


  )
}

export default UploadBlock;