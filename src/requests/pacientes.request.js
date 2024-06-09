import axios from 'axios'

const baseUrl = "http://localhost:3000/pacientes"

export const getPacientes = () => axios.get(baseUrl)