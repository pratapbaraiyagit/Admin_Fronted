import { API_CUSTOMER_GETALL } from "../../Constants/api";
import * as TYPE from "../../Constants/types";

export const customerListing = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_CUSTOMER_GETALL,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: TYPE.CUSTOMER_LISTING_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.CUSTOMER_LISTING_FAIL,
            payload: data
        })
    }
})