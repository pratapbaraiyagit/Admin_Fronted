import * as TYPE from "../../Constants/types"
import {
    API_ADMIN_CITY_DELETE_ID,
    API_ADMIN_CITY_GET_ID,
    API_ADMIN_CITY_UPDATE_ID,
    API_ADMIN_CITY_CREATE,
    API_ADMIN_CITY_GETALL,
} from '../../Constants/api'

export const adminCityListing = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_CITY_GETALL,
        method: 'GET',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_CITY_LISTING_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_CITY_LISTING_FAIL,
            payload: data
        })
    }
})

export const adminCityAdd = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_CITY_CREATE,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_CITY_ADD_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_CITY_ADD_FAIL,
            payload: data
        })
    }
})

export const adminCityEdit = (id) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_CITY_GET_ID + `${id}`,
        method: 'GET',
        success: (data) => ({
            type: TYPE.ADMIN_CITY_EDIT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_CITY_EDIT_FAIL,
            payload: data
        })
    }
})

export const adminCityDelete = (id) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_CITY_DELETE_ID + `${id}`,
        method: 'DELETE',
        data: id,
    }
})

export const adminCityUpdate = (data, id) => {
    return (
        {
            type: TYPE.ADMIN_API,
            payload: {
                url: API_ADMIN_CITY_UPDATE_ID + `${id}`,
                method: 'POST',
                data: data,
                success: (data) => ({
                    type: TYPE.ADMIN_CITY_UPDATE_SUCCESS,
                    payload: data
                }),
                error: (data) => ({
                    type: TYPE.ADMIN_CITY_UPDATE_FAIL,
                    payload: data
                })
            }
        })
}

// export const adminEnableCategoryListing = (data) => ({
//     type: TYPE.ADMIN_API,
//     payload: {
//         url: API_ADMIN_ENABLE_CITY_GETALL,
//         method: 'GET',
//         data: data,
//         success: (data) => ({
//             type: TYPE.ADMIN_ENABLE_CITY_LISTING_SUCCESS,
//             payload: data
//         }),
//         error: (data) => ({
//             type: TYPE.ADMIN_ENABLE_CITY_LISTING_FAIL,
//             payload: data
//         })
//     }
// })