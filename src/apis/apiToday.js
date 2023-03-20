import axios from "axios"

const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

function userToken(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function check(token, id) {
    const promise = axios.post(`${url}/${id}/check`, {}, userToken(token))
    return promise
}

function uncheck(token, id) {
    const promise = axios.post(`${url}/${id}/uncheck`, {}, userToken(token))
    return promise
}

function todayRequest(token) {
    const promise = axios.get(`${url}/today`, userToken(token))
    return promise
}

const apiToday = { todayRequest, check, uncheck }
export default apiToday