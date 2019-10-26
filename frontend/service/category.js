import ApiService from "../utils/ApiService";

export const getQuestion = async () => {
    let res = await ApiService.get(`category`)
    return res.data
}
export const getQuestionById = async () => {
    let res = await ApiService.get(`category/${category_id}`)
    return res.data
}
export const postQuestion = async (data) => {
    let res = await ApiService.post(`category`, data)
    return res.data
}
export const putQuestionById = async (data) => {
    let res = await ApiService.put(`category/${category_id}`, data)
    return res.data
}
export const deleteQuestionById = async (data) => {
    let res = await ApiService.delete(`category/${category_id}`, data)
    return res.data
}