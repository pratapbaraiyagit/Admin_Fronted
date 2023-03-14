import * as TYPE from "../../Constants/types";

const initialState = {
    categoryList: {},
    categoryAdd: {},
    categoryEdit: {},
};
const adminCustomer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADMIN_CATEGORY_LISTING_SUCCESS:
            return {
                ...state,
                categoryList: action.payload
            };
        case TYPE.ADMIN_CATEGORY_LISTING_FAIL:
            return {
                ...state,
                categoryList: action.payload.message
            };

        case TYPE.ADMIN_CATEGORY_ADD_SUCCESS:
            return {
                ...state,
                categoryAdd: action.payload
            };
        case TYPE.ADMIN_CATEGORY_ADD_FAIL:
            return {
                ...state,
                categoryAdd: action.payload.message
            };

        case TYPE.ADMIN_CATEGORY_EDIT_SUCCESS:
            return {
                ...state,
                categoryEdit: action.payload
            };
        case TYPE.ADMIN_CATEGORY_EDIT_FAIL:
            return {
                ...state,
                categoryEdit: action.payload.message
            };

        default:
            return state;
    }
}
export default adminCustomer