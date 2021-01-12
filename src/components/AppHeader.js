import { useState } from 'react';
import { useSelector } from 'react-redux';

import Modal from './Modal';
import AddJob from './jobs/AddJob';

const AppHeader = () => {

  const [isModalOpen, setIsModalOpen] = useState();
  const currentJob = useSelector((state) => state?.jobsReducer?.currentJob);
  console.log("​AppHeader -> currentJob", currentJob)


  const modalToggle = () => {
    setIsModalOpen(isModalOpen ? '' : 'show');
  };

  const handleAddCandidate = () => {
    alert('Candidate may have been added or not :) ');
  };

  return (
    <>
      <div className="w-100 bg-light pl-4">
        Menu
        <button
          type="submit"
          className="btn btn-primary addJobButton"
          onClick={modalToggle}
        >
          Add Job
        </button>
        {typeof currentJob?.id === 'number' && !(currentJob?.id % 2) && (
          <button
            type="submit"
            className="btn btn-primary addJobButton"
            onClick={handleAddCandidate}
          >
            Add Candidate
          </button>
        )}
      </div>
      <Modal isOpen={isModalOpen} modalToggle={modalToggle}>
        <AddJob modalToggle={modalToggle} />
      </Modal>
    </>
  );
};

export default AppHeader;
