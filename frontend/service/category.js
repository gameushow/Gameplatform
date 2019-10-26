import ApiService from "../utils/ApiService";

export const getCategory = async () => {
    let res = await ApiService.get(`categories`)
    return res.data
}
export const getCategoryById = async () => {
    let res = await ApiService.get(`category/${category_id}`)
    return res.data
}
export const postCategory = async (data) => {
    let res = await ApiService.post(`category`, data)
    return res.data
}
export const putCategoryById = async (data) => {
    let res = await ApiService.put(`category/${data.id}`, data)
    return res.data
}
export const deleteCategoryById = async (data) => {
    let res = await ApiService.delete(`category/${category_id}`, data)
    return res.data
}