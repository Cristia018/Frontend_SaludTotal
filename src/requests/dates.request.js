import axios from 'axios'

const baseUrl = "http://localhost:3000/date"

export const postDate = (data) => axios.post(baseUrl, data)