import axios from 'axios'

const baseUrl = "http://localhost:3000/dates"

export const postDate = (data) => axios.post(baseUrl, data)

export const getDates = (userId) => axios.get(`${baseUrl}?user_id=${userId}`)

export const deleteDate = (id) => axios.delete(`${baseUrl}/${id}`)