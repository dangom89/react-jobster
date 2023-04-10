import customFetch, { checkForUnauthorizedResponse } from '../../utils/axios';

export const getAllJobsThunk = async (_, thunkAPI) => {
    const { page, search, searchStatus, searchType, sort } = thunkAPI.getState().allJobs
    let url = '/jobs'
    try {
        const resp = await customFetch.get(url, {
            params: {
                search, //or "search: search || null", to not send, if empty
                status: searchStatus,
                jobType: searchType,
                sort,
                page,
            }
        })
        return resp.data
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI)

    }
}

export const showStatsThunk = async (_, thunkAPI) => {
    try {
        const resp = await customFetch.get(`jobs/stats`)
        return resp.data
    } catch (error) {
        return checkForUnauthorizedResponse(error, thunkAPI)
    }
}