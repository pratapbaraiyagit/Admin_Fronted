import * as TYPE from "../../Constants/types";

const initialState = {
    cityList: {},
    cityAdd: {},
    cityEdit: {},
};
const adminCity = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADMIN_CITY_LISTING_SUCCESS:
            return {
                ...state,
                cityList: action.payload
            };
        case TYPE.ADMIN_CITY_LISTING_FAIL:
            return {
                ...state,
                cityList: action.payload.message
            };

        case TYPE.ADMIN_CITY_ADD_SUCCESS:
            return {
                ...state,
                cityAdd: action.payload
            };
        case TYPE.ADMIN_CITY_ADD_FAIL:
            return {
                ...state,
                cityAdd: action.payload.message
            };

        case TYPE.ADMIN_CITY_EDIT_SUCCESS:
            return {
                ...state,
                cityEdit: action.payload
            };
        case TYPE.ADMIN_CITY_EDIT_FAIL:
            return {
                ...state,
                cityEdit: action.payload.message
            };

        default:
            return state;
    }
}
export default adminCity