import * as TYPE from "../../Constants/types";

const initialState = {
    customerList: {},
};
const adminCustomer = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADMIN_CUSTOMER_LISTING_SUCCESS:
            return {
                ...state,
                customerList: action.payload.data
            };
        case TYPE.ADMIN_CUSTOMER_LISTING_FAIL:
            return {
                ...state,
                customerList: action.payload.message
            };

        default:
            return state;
    }
}
export default adminCustomer