import * as TYPE from "../../Constants/types"
import {
    API_ADMIN_CUSTOMER_FAQ_CREATE,
    API_ADMIN_CUSTOMER_FAQ_DELETE_ID,
    API_ADMIN_CUSTOMER_FAQ_GETALL,
    API_ADMIN_CUSTOMER_FAQ_GET_ID,
    API_ADMIN_CUSTOMER_FAQ_UPDATE_ID
} from '../../Constants/api'

export const adminCustomerFAQListing = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_CUSTOMER_FAQ_GETALL,
        method: 'GET',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_CUSTOMER_FAQ_LISTING_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_CUSTOMER_FAQ_LISTING_FAIL,
            payload: data
        })
    }
})

export const adminCustomerFAQAdd = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_CUSTOMER_FAQ_CREATE,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_CUSTOMER_FAQ_ADD_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_CUSTOMER_FAQ_ADD_FAIL,
            payload: data
        })
    }
})

export const adminCustomerFAQEdit = (id) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_CUSTOMER_FAQ_GET_ID + `${id}`,
        method: 'GET',
        success: (data) => ({
            type: TYPE.ADMIN_CUSTOMER_FAQ_EDIT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_CUSTOMER_FAQ_EDIT_FAIL,
            payload: data
        })
    }
})

export const adminCustomerFAQDelete = (id) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_CUSTOMER_FAQ_DELETE_ID + `${id}`,
        method: 'DELETE',
        data: id,
        // success: (data) => ({
        //     type: TYPE.ADMIN_CUSTOMER_FAQ_EDIT_SUCCESS,
        //     payload: data
        // }),
        // error: (data) => ({
        //     type: TYPE.ADMIN_CUSTOMER_FAQ_EDIT_FAIL,
        //     payload: data
        // })
    }
})

export const adminCustomerFAQUpdate = (data, id) => {
    return (
        {
            type: TYPE.ADMIN_API,
            payload: {
                url: API_ADMIN_CUSTOMER_FAQ_UPDATE_ID + `${id}`,
                method: 'POST',
                data: data,
                success: (data) => ({
                    type: TYPE.ADMIN_CUSTOMER_FAQ_UPDATE_SUCCESS,
                    payload: data
                }),
                error: (data) => ({
                    type: TYPE.ADMIN_CUSTOMER_FAQ_UPDATE_FAIL,
                    payload: data
                })
            }
        })
}