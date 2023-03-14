import {
    API_ADMIN_CHANGE_PASSWORD,
    API_ADMIN_FORGOT_PASSWORD,
    API_ADMIN_FORGOT_PASSWORD_OTP,
    API_ADMIN_LOGIN,
    API_ADMIN_RESET_PASSWORD
} from "../../Constants/api";
import * as TYPE from "../../Constants/types";

export const adminDoLogin = (data) => (
    {
        type: TYPE.ADMIN_API,
        payload: {
            url: API_ADMIN_LOGIN,
            method: 'POST',
            data: data,
            success: (data) => ({
                type: TYPE.ADMIN_LOGIN_SUCCESS,
                payload: data
            }),
            error: (data) => ({
                type: TYPE.ADMIN_LOGIN_ERROR,
                payload: data
            })
        }
    })


export const adminDoForgotPassword = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_FORGOT_PASSWORD,
        method: 'POST',
        data: data,
        success: (data) => (
            {
                type: TYPE.ADMIN_FORGOT_PASSWORD_SUCCESS,
                payload: data,
            }),
        error: (data) => ({
            type: TYPE.ADMIN_FORGOT_PASSWORD_ERROR,
            payload: data
        })
    }
})

export const adminDoForgotPasswordOTP = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_FORGOT_PASSWORD_OTP,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_FORGOT_PASSWORD_OTP_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_FORGOT_PASSWORD_OTP_ERROR,
            payload: data
        })
    }
})

export const adminDoResetPassword = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_RESET_PASSWORD,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_RESET_PASSWORD_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_RESET_PASSWORD_ERROR,
            payload: data
        })
    }
})

export const adminDoChangePassword = (data) => ({
    type: TYPE.ADMIN_API,
    payload: {
        url: API_ADMIN_CHANGE_PASSWORD,
        method: 'POST',
        data: data,
        success: (data) => ({
            type: TYPE.ADMIN_CHANGE_PASSWORD_SUCCESS,
            payload: data
        }),
        error: (data) => ({
            type: TYPE.ADMIN_CHANGE_PASSWORD_ERROR,
            payload: data
        })
    }
})

export const adminDoLogout = () => ({
    type: TYPE.ADMIN_LOGOUT
})