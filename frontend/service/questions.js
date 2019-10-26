import ApiService from "../utils/ApiService";

export const getQuestion = async () => {
    let res = await ApiService.get('/game/1/questions')
    return res.data
}
export const getQuestionById = async () => {
    let res = await ApiService.get(`/game/1/question/${question_id}`)
    return res.data
}
export const postQuestion = async (data) => {
    let res = await ApiService.post(`/game/1/question`, data)
    return res.data
}
export const putQuestionById = async (data) => {
    let res = await ApiService.put(`/game/1/question/${question_id}`, data)
    return res.data
}
export const deleteQuestionById = async (data) => {
    let res = await ApiService.delete(`/game/1/question/${question_id}`, data)
    return res.data
}


