import React from 'react';
import { useSelector } from 'react-redux';

const Applications = () => {
  const currentJob = useSelector((state) => state?.jobsReducer?.currentJob);

  return (
    <>
      <h1>{currentJob.jobTitle}</h1>

      {Object.keys(currentJob).map(function (key, index) {
        return (
          <div key={index}>
            {key} : {currentJob[key]}{' '}
          </div>
        );
      })}
    </>
  );
};

export default Applications;
