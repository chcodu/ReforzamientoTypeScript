import axios from "axios";

export const reqReaApi = axios.create({
    baseURL: 'https://reqres.in/api'
})   