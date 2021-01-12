import React from "react";
import { useForm } from "react-hook-form";
import { postJob } from "services/api";
import { useDispatch } from 'react-redux';
import { fetchJobs } from '../../redux/actions/actions';

const AddJob = ({ modalToggle }) => {
  const dispatch = useDispatch();

  const { register, handleSubmit, reset, errors } = useForm();
  const onSubmit = data => postJob(data).then(() => {
    modalToggle();
    dispatch(fetchJobs());
    reset();
  });



  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>

        <div className="form-group">
          <label htmlFor="jobtitle">Job title </label>
          <input
            type="text"
            className="form-control"
            id="jobTitle"
            placeholder="Enter jobtitle"
            name="jobTitle"
            ref={register({ required: true })}
          />
          {/* {errors.jobTitle && <span style={{ color: 'red' }}>Job Title is required</span>} */}

        </div>

        <div className="form-group">
          <label htmlFor="expirydate">Expiry date </label>
          <input
            type="text"
            className="form-control"
            id="expiryDate"
            placeholder="Enter expiry date (dd/mm/yyyy)"
            ref={register}
            name="expiryDate"

          />
        </div>
        <div className="form-group">
          <label htmlFor="totalApplicants">Total Applications </label>
          <input
            type="text"
            className="form-control"
            id="totalApplicants"
            placeholder="Enter total applications"
            ref={register}
            name="totalApplicants"

          />
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default AddJob;
