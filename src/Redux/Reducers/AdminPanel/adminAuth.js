import * as TYPE from "../../Constants/types";

const initialState = {
    adminUser: undefined,
    adminForgotPassword: {},
    adminForgotPasswordOtp: {},
    adminResetPassword: {},
    adminChangePassword: {},
};


const adminAuthReducer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADMIN_LOGIN_SUCCESS:
            // const tokenStore = action.payload?.data?.authToken
            console.log('action.payload :>> ', action.payload?.data?.authToken);
            localStorage.setItem('ProServAdminToken', JSON.stringify(action.payload?.data?.authToken));
            return {
                ...state,
                adminUser: action.payload
            };
        case TYPE.ADMIN_LOGIN_ERROR:
            return {
                ...state,
                adminUser: action.payload.message
            }

        // admin forgot password reducers    
        case TYPE.ADMIN_FORGOT_PASSWORD_SUCCESS:
            return {
                ...state,
                adminForgotPassword: action.payload
            }
        case TYPE.ADMIN_FORGOT_PASSWORD_ERROR:
            return {
                ...state,
                adminForgotPassword: action.payload.message
            }

        // admin forgot password otp reducers    
        case TYPE.ADMIN_FORGOT_PASSWORD_OTP_SUCCESS:
            return {
                ...state,
                adminForgotPasswordOtp: action.payload
            }
        case TYPE.ADMIN_FORGOT_PASSWORD_OTP_ERROR:
            return {
                ...state,
                adminForgotPasswordOtp: action.payload.message
            }

        // admin reset password reducers    
        case TYPE.ADMIN_RESET_PASSWORD_SUCCESS:
            return {
                ...state,
                adminResetPassword: action.payload.data
            }
        case TYPE.ADMIN_RESET_PASSWORD_ERROR:
            return {
                ...state,
                adminResetPassword: action.payload.message
            }

        // admin change password reducers    
        case TYPE.ADMIN_CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                adminChangePassword: action.payload.data
            }
        case TYPE.ADMIN_CHANGE_PASSWORD_ERROR:
            return {
                ...state,
                adminChangePassword: action.payload.message
            }

        case TYPE.ADMIN_LOGOUT:
            localStorage.removeItem('ProServAdminToken')
            return initialState;

        default:
            return state;
    }
}

export default adminAuthReducer