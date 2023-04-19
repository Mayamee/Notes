import axios from 'axios'

const { REACT_APP_API_BASE_URL } = process.env

const API_URL = REACT_APP_API_BASE_URL || 'http://localhost:8888'

const $api = axios.create({ baseURL: API_URL })

export default $api
