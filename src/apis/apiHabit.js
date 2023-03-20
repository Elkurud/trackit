import axios from "axios"

const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

function userToken(token) {
    return {
        headers: {
            Authorization: `Bearer ${token}`
        }
    }
}

function getHabit(token) {
    const promise = axios.get(url, userToken(token))
    return promise
}

function createHabit(token, body) {
    const promise = axios.post(url, body, userToken(token))
    return promise
}

function deleteHabit(token, id) {
    const promise = axios.delete(`${url}/${id}`, userToken(token))
    return promise
}

const apiHabit = { getHabit, createHabit, deleteHabit }
export default apiHabit