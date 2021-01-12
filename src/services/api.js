import * as client from './client';

export const getCourses = async () => {
    return await client.getData('courses')
}

export const getJobs = async () => {
    return await client.getData('jobs')
}

export const postJob = async (data) => {
    return await client.postData('jobs', data)
}