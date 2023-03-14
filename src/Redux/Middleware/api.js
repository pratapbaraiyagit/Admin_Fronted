import axios from 'axios'
import { API_BASE } from '../Constants/api'
import { adminFetchFailed, adminFetchRequested, adminFetchSucceeded } from "../Actions/AdminPanel/adminApi";
import * as TYPE from "../Constants/types";

const apiMiddleware = store => next => action => {
    if (next) next(action);

    const { type, payload } = action;

    const adminToken = JSON.parse(localStorage.getItem("ProServAdminToken"))

    if (type === TYPE.ADMIN_API) {
        const {
            url,
            data,
            request = adminFetchRequested,
            success = adminFetchSucceeded,
            error = adminFetchFailed,
            method = 'get',
            hideLoader,
        } = payload;
        if (!hideLoader)
            store.dispatch(request({ payload }));

        return axios({
            baseURL: API_BASE, method, url, data, headers: { "Authorization": `Bearer ${adminToken}` }
        }).then(res => {
            store.dispatch(success(res.data));
            store.dispatch(adminFetchSucceeded())
            return Promise.resolve(res.data);
        }).catch(err => {
            store.dispatch(error(err.response.data));
            store.dispatch(adminFetchFailed())
            return Promise.reject(err.response.data);
        });
    }
}
export default apiMiddleware;