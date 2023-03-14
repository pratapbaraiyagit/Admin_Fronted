import * as TYPE from "../../Constants/types";

const initialState = {
    whyChooseUsList: {},
    whyChooseUsAdd: {},
    whyChooseUsEdit: {},
};
const adminWhyChooseUs = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADMIN_WHY_CHOOSE_US_LISTING_SUCCESS:
            return {
                ...state,
                whyChooseUsList: action.payload
            };
        case TYPE.ADMIN_WHY_CHOOSE_US_LISTING_FAIL:
            return {
                ...state,
                whyChooseUsList: action.payload.message
            };

        case TYPE.ADMIN_WHY_CHOOSE_US_ADD_SUCCESS:
            return {
                ...state,
                whyChooseUsAdd: action.payload
            };
        case TYPE.ADMIN_WHY_CHOOSE_US_ADD_FAIL:
            return {
                ...state,
                whyChooseUsAdd: action.payload.message
            };

        case TYPE.ADMIN_WHY_CHOOSE_US_EDIT_SUCCESS:
            return {
                ...state,
                whyChooseUsEdit: action.payload
            };
        case TYPE.ADMIN_WHY_CHOOSE_US_EDIT_FAIL:
            return {
                ...state,
                whyChooseUsEdit: action.payload.message
            };

        default:
            return state;
    }
}
export default adminWhyChooseUs