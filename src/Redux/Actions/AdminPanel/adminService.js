import * as TYPE from "../../Constants/types"
import {
    API_ADMIN_ENABLE_SERVICE_GETALL,
    API_ADMIN_SERVICE_CREATE,
    API_ADMIN_SERVICE_DELETE_ID,
    API_ADMIN_SERVICE_GETALL,
    API_ADMIN_SERVICE_GET_ID,
    API_ADMIN_SERVICE_UPDATE_ID
} from '../../Constants/api'

export const adminServiceListing = (data) => {
    return ({
        type: TYPE.ADMIN_API,
        payload: {
            url: API_ADMIN_SERVICE_GETALL,
            method: 'GET',
            data: data,
            success: (data) => ({
                type: TYPE.ADMIN_SERVICE_LISTING_SUCCESS,
                payload: data
            }),
            error: (data) => ({
                type: TYPE.ADMIN_SERVICE_LISTING_FAIL,
                payload: data
            })
        }
    })
}

export const adminServiceAdd = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_SERVICE_CREATE,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_SERVICE_ADD_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_SERVICE_ADD_FAIL,
            payload: data
        })
    }
})

export const adminServiceEdit = (id) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_SERVICE_GET_ID + `${id}`,
        method: 'GET',
        success: (data) => ({
            type: TYPE.ADMIN_SERVICE_EDIT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_SERVICE_EDIT_FAIL,
            payload: data
        })
    }
})

export const adminServiceDelete = (id) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_SERVICE_DELETE_ID + `${id}`,
        method: 'DELETE',
        data: id,
        // success: (data) => ({
        //     type: TYPE.ADMIN_CATEGORY_EDIT_SUCCESS,
        //     payload: data
        // }),
        // error: (data) => ({
        //     type: TYPE.ADMIN_CATEGORY_EDIT_FAIL,
        //     payload: data
        // })
    }
})

export const adminServiceUpdate = (data, id) => {
    return (
        {
            type: TYPE.ADMIN_API,
            payload: {
                url: API_ADMIN_SERVICE_UPDATE_ID + `${id}`,
                method: 'POST',
                data: data,
                success: (data) => ({
                    type: TYPE.ADMIN_SERVICE_UPDATE_SUCCESS,
                    payload: data
                }),
                error: (data) => ({
                    type: TYPE.ADMIN_SERVICE_UPDATE_FAIL,
                    payload: data
                })
            }
        })
}

export const adminEnableServiceListing = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_ENABLE_SERVICE_GETALL,
        method: 'GET',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_ENABLE_CATEGORY_LISTING_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_ENABLE_CATEGORY_LISTING_FAIL,
            payload: data
        })
    }
})