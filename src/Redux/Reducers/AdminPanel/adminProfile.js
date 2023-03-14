import * as TYPE from "../../Constants/types";

const initialState = {
    profileEdit: {},
};
const adminProfile = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADMIN_PROFILE_EDIT_SUCCESS:
            return {
                ...state,
                profileEdit: action.payload
            };
        case TYPE.ADMIN_PROFILE_EDIT_FAIL:
            return {
                ...state,
                profileEdit: action.payload.message
            };

        default:
            return state;
    }
}
export default adminProfile