import axios from "axios";

const axiosInstance = axios.create();

axiosInstance.interceptors.request.use(
        (config) =>{
            const token = localStorage.getItem('jwt');
            if(token){
                config.headers.Authorization = `Bearer ${token}`;
                return config;
            }
        },
        (error) =>{
            console.error(error);
            return Promise.reject(error)
        }
    );

export default axiosInstance;