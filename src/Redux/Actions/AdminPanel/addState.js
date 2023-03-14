import * as TYPE from "../../Constants/types"
import {
    API_ADMIN_STATE_DELETE_ID,
    API_ADMIN_STATE_GET_ID,
    API_ADMIN_STATE_UPDATE_ID,
    API_ADMIN_STATE_CREATE,
    API_ADMIN_STATE_GETALL,
} from '../../Constants/api'

export const adminStateListing = (props) => {
    return ({
        type: TYPE.ADMIN_API,
        payload: {
            url: API_ADMIN_STATE_GETALL,
            method: 'GET',
            // data: data,
            success: (data) => ({
                type: TYPE.ADMIN_STATE_LISTING_SUCCESS,
                payload: data
            }),
            error: (data) => ({
                type: TYPE.ADMIN_STATE_LISTING_FAIL,
                payload: data
            })
        }
    })
}

export const adminStateAdd = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_STATE_CREATE,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_STATE_ADD_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_STATE_ADD_FAIL,
            payload: data
        })
    }
})

export const adminStateEdit = (id) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_STATE_GET_ID + `${id}`,
        method: 'GET',
        success: (data) => ({
            type: TYPE.ADMIN_STATE_EDIT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_STATE_EDIT_FAIL,
            payload: data
        })
    }
})

export const adminStateDelete = (id) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_STATE_DELETE_ID + `${id}`,
        method: 'DELETE',
        data: id,
    }
})

export const adminStateUpdate = (data, id) => {
    return (
        {
            type: TYPE.ADMIN_API,
            payload: {
                url: API_ADMIN_STATE_UPDATE_ID + `${id}`,
                method: 'POST',
                data: data,
                success: (data) => ({
                    type: TYPE.ADMIN_STATE_UPDATE_SUCCESS,
                    payload: data
                }),
                error: (data) => ({
                    type: TYPE.ADMIN_STATE_UPDATE_FAIL,
                    payload: data
                })
            }
        })
}

// export const adminEnableCategoryListing = (data) => ({
//     type: TYPE.ADMIN_API,
//     payload: {
//         url: API_ADMIN_ENABLE_STATE_GETALL,
//         method: 'GET',
//         data: data,
//         success: (data) => ({
//             type: TYPE.ADMIN_ENABLE_STATE_LISTING_SUCCESS,
//             payload: data
//         }),
//         error: (data) => ({
//             type: TYPE.ADMIN_ENABLE_STATE_LISTING_FAIL,
//             payload: data
//         })
//     }
// })