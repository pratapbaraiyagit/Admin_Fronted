import { adminDoLogout } from '../Redux/Actions/AdminPanel/adminAuth'

export const setupAxios = (axios, store) => {
    const adminToken = JSON.parse(localStorage.getItem("ProServAdminToken"));
    if (adminToken) {
        axios.defaults.headers.common['Authorization'] = adminToken;
    } else {
        axios.defaults.headers.common['Authorization'] = null;
    }

    axios.interceptors.response.use(null, (err) => {
        if (err.response) {
            if (err.response.status === 403) {
                // store.dispatch(adminDoLogout())
                return Promise.reject(err);
            } else return Promise.reject(err);
        } else if (err.request) {
            return Promise.reject({
                response: {
                    data: {
                        message: "Something went wrong, Please try again later!!!"
                    }
                }
            });
        }
    })

}