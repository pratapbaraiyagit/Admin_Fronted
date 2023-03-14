import * as TYPE from "../../Constants/types"
import {
    API_ADMIN_CATEGORY_CREATE,
    API_ADMIN_CATEGORY_DELETE_ID,
    API_ADMIN_CATEGORY_GETALL,
    API_ADMIN_CATEGORY_GET_ID,
    API_ADMIN_CATEGORY_UPDATE_ID,
    API_ADMIN_ENABLE_CATEGORY_GETALL
} from '../../Constants/api'

export const adminCategoryListing = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_CATEGORY_GETALL,
        method: 'GET',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_CATEGORY_LISTING_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_CATEGORY_LISTING_FAIL,
            payload: data
        })
    }
})

export const adminCategoryAdd = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_CATEGORY_CREATE,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_CATEGORY_ADD_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_CATEGORY_ADD_FAIL,
            payload: data
        })
    }
})

export const adminCategoryEdit = (id) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_CATEGORY_GET_ID + `${id}`,
        method: 'GET',
        success: (data) => ({
            type: TYPE.ADMIN_CATEGORY_EDIT_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_CATEGORY_EDIT_FAIL,
            payload: data
        })
    }
})

export const adminCategoryDelete = (id) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_CATEGORY_DELETE_ID + `${id}`,
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

export const adminCategoryUpdate = (data, id) => {
    return (
        {
            type: TYPE.ADMIN_API,
            payload: {
                url: API_ADMIN_CATEGORY_UPDATE_ID + `${id}`,
                method: 'POST',
                data: data,
                success: (data) => ({
                    type: TYPE.ADMIN_CATEGORY_UPDATE_SUCCESS,
                    payload: data
                }),
                error: (data) => ({
                    type: TYPE.ADMIN_CATEGORY_UPDATE_FAIL,
                    payload: data
                })
            }
        })
}

export const adminEnableCategoryListing = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_ENABLE_CATEGORY_GETALL,
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