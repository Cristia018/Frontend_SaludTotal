import axios from "axios";
import { BASE_URL } from "../config";

const baseUrl = `${BASE_URL}/auth`

export const register = async (data) => {
    return axios.post(baseUrl + '/register', data)
}

export const logIn = async (data) => {
    return axios.post(baseUrl + '/login', data)
}