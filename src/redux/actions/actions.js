import { ACTION_TYPES } from '../reducers/jobsReducer';
import to from 'await-to-js'

import { getJobs } from '../../services/api';


export const fetchJobs = (params) => async dispatch => {

    const [err, payload] = await to(getJobs(params))

    if (err) {
        return
    }

    dispatch({
        type: ACTION_TYPES.GET_JOBS,
        payload
    })
}

export const setCurrentJob = (job) => async dispatch => {

    dispatch({
        type: ACTION_TYPES.SET_CURRENT_JOB,
        payload: job
    })
}

