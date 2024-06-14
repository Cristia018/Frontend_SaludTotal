import axios from 'axios'
import { BASE_URL } from '../config'

const baseUrl = `${BASE_URL}/pacientes`

export const getPacientes = () => axios.get(baseUrl)