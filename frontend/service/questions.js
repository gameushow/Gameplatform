import ApiService from "../utils/ApiService";

const getQuestion = async () => {
    let res = await ApiService.get('/game/1/questions')
    return res.data
}
const getQuestionById = async () => {
    let res = await ApiService.get(`/game/1/question/${question_id}`)
    return res.data
}
const postQuestion = async (data) => {
    let res = await ApiService.post(`/game/1/question`, data)
    return res.data
}
const putQuestionById = async (data) => {
    let res = await ApiService.put(`/game/1/question/${question_id}`, data)
    return res.data
}
const deleteQuestionById = async (data) => {
    let res = await ApiService.delete(`/game/1/question/${question_id}`, data)
    return res.data
}

//cat//
const getQuestion = async () => {
    let res = await ApiService.get(`category`)
    return res.data
}
const getQuestionById = async () => {
    let res = await ApiService.get(`category/${category_id}`)
    return res.data
}
const postQuestion = async (data) => {
    let res = await ApiService.post(`category`, data)
    return res.data
}
const putQuestionById = async (data) => {
    let res = await ApiService.put(`category/${category_id}`, data)
    return res.data
}
const deleteQuestionById = async (data) => {
    let res = await ApiService.delete(`category/${category_id}`, data)
    return res.data
}


