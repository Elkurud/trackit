import axios from "axios"

const url = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth"

function signIn(info) {
    const promise = axios.post(`${url}/login`, info)
    return promise
}

function signUp(info) {
    const promise = axios.post(`${url}/sign-up`, info)
    return promise
}

const apiSign = { signIn, signUp } 
export default apiSign