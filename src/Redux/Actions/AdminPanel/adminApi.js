import * as TYPE from "../../Constants/types"

export const adminFetchRequested = props => ({
    type: TYPE.ADMIN_API_REQUEST,
    ...props
})

export const adminFetchSucceeded = data => ({
    type: TYPE.ADMIN_API_SUCCESS,
    payload: { data }
})

export const adminFetchFailed = err => ({
    type: TYPE.ADMIN_API_ERROR,
    payload: { err }
})