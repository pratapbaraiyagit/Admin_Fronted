import * as TYPE from "../../Constants/types"
import {
    API_ADMIN_WISE_SUB_CATEGORY_GETALL,
    API_ADMIN_SUB_CATEGORY_CREATE,
    API_ADMIN_SUB_CATEGORY_DELETE_ID,
    API_ADMIN_SUB_CATEGORY_GETALL,
    API_ADMIN_SUB_CATEGORY_GET_ID,
    API_ADMIN_SUB_CATEGORY_UPDATE_ID
} from '../../Constants/api'

export const adminSubCategoryListing = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_SUB_CATEGORY_GETALL,
        method: 'GET',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_SUBCATEGORY_LISTING_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_SUBCATEGORY_LISTING_FAIL,
            payload: data
        })
    }
})

export const adminSubCategoryAdd = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_SUB_CATEGORY_CREATE,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_SUBCATEGORY_ADD_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_SUBCATEGORY_ADD_FAIL,
            payload: data
        })
    }
})

export const adminSubCategoryEdit = (id) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_SUB_CATEGORY_GET_ID + `${id}`,
        method: 'GET',
        success: (data) => ({
            type: TYPE.ADMIN_SUBCATEGORY_EDIT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_SUBCATEGORY_EDIT_FAIL,
            payload: data
        })
    }
})

export const adminSubCategoryDelete = (id) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_SUB_CATEGORY_DELETE_ID + `${id}`,
        method: 'DELETE',
        data: id,
    }
})

export const adminSubCategoryUpdate = (data, id) => {
    return (
        {
            type: TYPE.ADMIN_API,
            payload: {
                url: API_ADMIN_SUB_CATEGORY_UPDATE_ID + `${id}`,
                method: 'POST',
                data: data,
                success: (data) => ({
                    type: TYPE.ADMIN_SUBCATEGORY_UPDATE_SUCCESS,
                    payload: data
                }),
                error: (data) => ({
                    type: TYPE.ADMIN_SUBCATEGORY_UPDATE_FAIL,
                    payload: data
                })
            }
        })
}

// export const adminEnableCategoryListing = (data) => ({
//     type: TYPE.ADMIN_API,
//     payload: {
//         url: API_ADMIN_ENABLE_CATEGORY_GETALL,
//         method: 'GET',
//         data: data,
//         success: (data) => ({
//             type: TYPE.ADMIN_ENABLE_CATEGORY_LISTING_SUCCESS,
//             payload: data
//         }),
//         error: (data) => ({
//             type: TYPE.ADMIN_ENABLE_CATEGORY_LISTING_FAIL,
//             payload: data
//         })
//     }
// })

export const adminWiseSubCategoryListing = (id) => {
    return ({
        type: TYPE.ADMIN_API,
        payload: {
            url: API_ADMIN_WISE_SUB_CATEGORY_GETALL + `${id}`,
            method: 'GET',
            // data: data,
            success: (data) => ({
                type: TYPE.ADMIN_WISE_SUBCATEGORY_LISTING_SUCCESS,
                payload: data
            }),
            error: (data) => ({
                type: TYPE.ADMIN_WISE_SUBCATEGORY_LISTING_FAIL,
                payload: data
            })
        }
    })
}