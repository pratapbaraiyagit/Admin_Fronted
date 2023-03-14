import * as TYPE from "../../Constants/types";

const initialState = {
    serviceList: {},
    serviceAdd: {},
    serviceEdit: {},
    serviceEnableList: {},
};
const adminService = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADMIN_SERVICE_LISTING_SUCCESS:
            return {
                ...state,
                serviceList: action.payload
            };
        case TYPE.ADMIN_SERVICE_LISTING_FAIL:
            return {
                ...state,
                serviceList: action.payload.message
            };

        case TYPE.ADMIN_SERVICE_ADD_SUCCESS:
            return {
                ...state,
                serviceAdd: action.payload
            };
        case TYPE.ADMIN_SERVICE_ADD_FAIL:
            return {
                ...state,
                serviceAdd: action.payload.message
            };

        case TYPE.ADMIN_SERVICE_EDIT_SUCCESS:
            return {
                ...state,
                serviceEdit: action.payload
            };
        case TYPE.ADMIN_SERVICE_EDIT_FAIL:
            return {
                ...state,
                serviceEdit: action.payload.message
            };

        case TYPE.ADMIN_ENABLE_SERVICE_LISTING_SUCCESS:
            return {
                ...state,
                serviceEnableList: action.payload
            };
        case TYPE.ADMIN_ENABLE_SERVICE_LISTING_FAIL:
            return {
                ...state,
                serviceEnableList: action.payload.message
            };

        default:
            return state;
    }
}
export default adminService