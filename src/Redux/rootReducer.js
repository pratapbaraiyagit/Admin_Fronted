import { combineReducers } from "redux";
import adminApiReducer from "./Reducers/AdminPanel/adminApi";
import adminAuthReducer from "./Reducers/AdminPanel/adminAuth"
import adminCustomer from './Reducers/AdminPanel/adminCustomer'
import adminCategory from './Reducers/AdminPanel/adminCategory'
import adminSubCategory from "./Reducers/AdminPanel/adminSubCategory";
import adminCustomerFAQ from "./Reducers/AdminPanel/adminCustomerFAQ";
import adminService from './Reducers/AdminPanel/adminService'
import adminState from "./Reducers/AdminPanel/adminState";
import adminCity from "./Reducers/AdminPanel/adminCity";
import adminWhyChooseUs from './Reducers/AdminPanel/adminWhyChooseUs'
import adminProfile from './Reducers/AdminPanel/adminProfile'

const rootReducer = combineReducers({
    adminApiReducer,
    adminAuthReducer,
    adminCustomer,
    adminCategory,
    adminSubCategory,
    adminCustomerFAQ,
    adminService,
    adminState,
    adminCity,
    adminWhyChooseUs,
    adminProfile

})

export default rootReducer