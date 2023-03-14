import * as TYPE from "../../Constants/types"
import { API_ADMIN_PROFILE_GET, API_ADMIN_PROFILE_UPDATE } from "../../Constants/api"

export const adminProfileEdit = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_PROFILE_GET,
        method: 'GET',
        success: (data) => ({
            type: TYPE.ADMIN_PROFILE_EDIT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_PROFILE_EDIT_FAIL,
            payload: data
        })
    }
})

export const adminProfileUpdate = (data, id) => {
    return (
        {
            type: TYPE.ADMIN_API,
            payload: {
                url: API_ADMIN_PROFILE_UPDATE,
                method: 'POST',
                data: data,
                success: (data) => ({
                    type: TYPE.ADMIN_PROFILE_UPDATE_SUCCESS,
                    payload: data
                }),
                error: (data) => ({
                    type: TYPE.ADMIN_PROFILE_UPDATE_FAIL,
                    payload: data
                })
            }
        })
}