import * as TYPE from "../../Constants/types";

const initialState = {
    stateList: {},
    stateAdd: {},
    stateEdit: {},
};
const adminState = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADMIN_STATE_LISTING_SUCCESS:
            return {
                ...state,
                stateList: action.payload
            };
        case TYPE.ADMIN_STATE_LISTING_FAIL:
            return {
                ...state,
                stateList: action.payload.message
            };

        case TYPE.ADMIN_STATE_ADD_SUCCESS:
            return {
                ...state,
                stateAdd: action.payload
            };
        case TYPE.ADMIN_STATE_ADD_FAIL:
            return {
                ...state,
                stateAdd: action.payload.message
            };

        case TYPE.ADMIN_STATE_EDIT_SUCCESS:
            return {
                ...state,
                stateEdit: action.payload
            };
        case TYPE.ADMIN_STATE_EDIT_FAIL:
            return {
                ...state,
                stateEdit: action.payload.message
            };

        default:
            return state;
    }
}
export default adminState