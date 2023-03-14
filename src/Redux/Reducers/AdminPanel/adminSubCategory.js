import * as TYPE from "../../Constants/types";

const initialState = {
    subCategoryList: {},
    subCategoryAdd: {},
    subCategoryEdit: {},
    categoryEnableList: {},
    categoryWiseList: {},
};
const adminSubCategory = (state = initialState, action) => {
    switch (action.type) {
        case TYPE.ADMIN_SUBCATEGORY_LISTING_SUCCESS:
            return {
                ...state,
                subCategoryList: action.payload
            };
        case TYPE.ADMIN_SUBCATEGORY_LISTING_FAIL:
            return {
                ...state,
                subCategoryList: action.payload.message
            };

        case TYPE.ADMIN_SUBCATEGORY_ADD_SUCCESS:
            return {
                ...state,
                subCategoryAdd: action.payload
            };
        case TYPE.ADMIN_SUBCATEGORY_ADD_FAIL:
            return {
                ...state,
                subCategoryAdd: action.payload.message
            };

        case TYPE.ADMIN_SUBCATEGORY_EDIT_SUCCESS:
            return {
                ...state,
                subCategoryEdit: action.payload
            };
        case TYPE.ADMIN_SUBCATEGORY_EDIT_FAIL:
            return {
                ...state,
                subCategoryEdit: action.payload.message
            };

        case TYPE.ADMIN_ENABLE_CATEGORY_LISTING_SUCCESS:
            return {
                ...state,
                categoryEnableList: action.payload
            };
        case TYPE.ADMIN_ENABLE_CATEGORY_LISTING_FAIL:
            return {
                ...state,
                categoryEnableList: action.payload.message
            };

        case TYPE.ADMIN_WISE_SUBCATEGORY_LISTING_SUCCESS:
            return {
                ...state,
                categoryWiseList: action.payload
            };
        case TYPE.ADMIN_WISE_SUBCATEGORY_LISTING_FAIL:
            return {
                ...state,
                categoryWiseList: action.payload.message
            };

        default:
            return state;
    }
}
export default adminSubCategory