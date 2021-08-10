import { getItemAsync, setItemAsync } from "expo-secure-store";

import { ACCESS_TOKEN } from '../constants/config'
import axios from 'axios'

axios.interceptors.request.use(async (config) => {
    const access_token  = await getItemAsync(ACCESS_TOKEN);
    config.headers.Authorization =  `Bearer ${access_token}` ;
    return config
})

axios.interceptors.response.use((response) => {
    return response
}, error => { 
    return Promise.reject(error)
})

export const httpClient = axios
