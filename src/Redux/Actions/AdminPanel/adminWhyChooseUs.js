import * as TYPE from "../../Constants/types"
import {
    API_ADMIN_WHY_CHOOSE_US_CREATE,
    API_ADMIN_WHY_CHOOSE_US_DELETE_ID,
    API_ADMIN_WHY_CHOOSE_US_GETALL,
    API_ADMIN_WHY_CHOOSE_US_GET_ID,
    API_ADMIN_WHY_CHOOSE_US_UPDATE_ID
} from '../../Constants/api'

export const adminWhyChooseUsListing = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_WHY_CHOOSE_US_GETALL,
        method: 'GET',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_WHY_CHOOSE_US_LISTING_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_WHY_CHOOSE_US_LISTING_FAIL,
            payload: data
        })
    }
})

export const adminWhyChooseUsAdd = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_WHY_CHOOSE_US_CREATE,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_WHY_CHOOSE_US_ADD_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_WHY_CHOOSE_US_ADD_FAIL,
            payload: data
        })
    }
})

export const adminWhyChooseUsEdit = (id) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_WHY_CHOOSE_US_GET_ID + `${id}`,
        method: 'GET',
        success: (data) => ({
            type: TYPE.ADMIN_WHY_CHOOSE_US_EDIT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_WHY_CHOOSE_US_EDIT_FAIL,
            payload: data
        })
    }
})

export const adminWhyChooseUsDelete = (id) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_WHY_CHOOSE_US_DELETE_ID + `${id}`,
        method: 'DELETE',
        data: id,
        // success: (data) => ({
        //     type: TYPE.ADMIN_WHY_CHOOSE_US_EDIT_SUCCESS,
        //     payload: data
        // }),
        // error: (data) => ({
        //     type: TYPE.ADMIN_WHY_CHOOSE_US_EDIT_FAIL,
        //     payload: data
        // })
    }
})

export const adminWhyChooseUsUpdate = (data, id) => {
    return (
        {
            type: TYPE.ADMIN_API,
            payload: {
                url: API_ADMIN_WHY_CHOOSE_US_UPDATE_ID + `${id}`,
                method: 'POST',
                data: data,
                success: (data) => ({
                    type: TYPE.ADMIN_WHY_CHOOSE_US_UPDATE_SUCCESS,
                    payload: data
                }),
                error: (data) => ({
                    type: TYPE.ADMIN_WHY_CHOOSE_US_UPDATE_FAIL,
                    payload: data
                })
            }
        })
}