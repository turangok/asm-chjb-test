import { useEffect } from 'react';
import MainHeader from '../MainHeader';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { fetchJobs, setCurrentJob } from '../../redux/actions/actions';
const Jobs = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);

  const handleClick = (job) => () => {
    // It will convert "my job - 1" to "my-job-1" (better than "my-job---1")
    const newJobTitle = job.jobTitle
      .replace(/-/g, ' ')
      .replace(/\s+/g, ' ')
      .replace(/ /g, '-');

    dispatch(setCurrentJob(job));

    history.push(`/active-jobs/${newJobTitle}/${job.id}`);
  };

  const jobList = useSelector((state) => state?.jobsReducer?.jobs);

  return (
    <>
      <MainHeader title="Jobs" />
      <div>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Title </th>
              <th scope="col">Expiry Date</th>
              <th scope="col">total Applications</th>
            </tr>
          </thead>
          <tbody>
            {jobList?.length > 0 &&
              jobList.map((job) => {
                return (
                  <tr key={job.id} onClick={handleClick(job)}>
                    <th scope="row">{job.id}</th>
                    <td>{job.jobTitle}</td>
                    <td>{job.expiryDate}</td>
                    <td>{job.totalApplicants}</td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Jobs;
