import * as TYPE from "../../Constants/types";

const initialState = {
    customerFAQList: {},
    customerFAQAdd: {},
    customerFAQEdit: {},
};
const adminCustomerFAQ = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADMIN_CUSTOMER_FAQ_LISTING_SUCCESS:
            return {
                ...state,
                customerFAQList: action.payload
            };
        case TYPE.ADMIN_CUSTOMER_FAQ_LISTING_FAIL:
            return {
                ...state,
                customerFAQList: action.payload.message
            };

        case TYPE.ADMIN_CUSTOMER_FAQ_ADD_SUCCESS:
            return {
                ...state,
                customerFAQAdd: action.payload
            };
        case TYPE.ADMIN_CUSTOMER_FAQ_ADD_FAIL:
            return {
                ...state,
                customerFAQAdd: action.payload.message
            };

        case TYPE.ADMIN_CUSTOMER_FAQ_EDIT_SUCCESS:
            return {
                ...state,
                customerFAQEdit: action.payload
            };
        case TYPE.ADMIN_CUSTOMER_FAQ_EDIT_FAIL:
            return {
                ...state,
                customerFAQEdit: action.payload.message
            };

        default:
            return state;
    }
}
export default adminCustomerFAQ