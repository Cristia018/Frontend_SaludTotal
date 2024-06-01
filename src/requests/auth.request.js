import axios from "axios";

const baseUrl = "http://localhost:3000/auth"

export const register = async (data) => {
    return axios.post(baseUrl + '/register', data)
}

export const logIn = async (data) => {
    return axios.post(baseUrl + '/login', data)
}