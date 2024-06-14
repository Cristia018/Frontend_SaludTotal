import axios from 'axios'
import {BASE_URL} from '../config.js'

const baseUrl = `${BASE_URL}/dates`

export const postDate = (data) => axios.post(baseUrl, data)

export const getDates = (userId) => axios.get(`${baseUrl}?user_id=${userId}`)

export const deleteDate = (id) => axios.delete(`${baseUrl}/${id}`)