export const getCategory = async () => {
    let res = await ApiService.get(`category`)
    return res.data
}
export const getCategoryId = async () => {
    let res = await ApiService.get(`category/${category_id}`)
    return res.data
}
export const postCategory = async (data) => {
    let res = await ApiService.post(`category`, data)
    return res.data
}
export const putCategoryById = async (data) => {
    let res = await ApiService.put(`category/${category_id}`, data)
    return res.data
}
export const deleteCategoryById = async (data) => {
    let res = await ApiService.delete(`category/${category_id}`, data)
    return res.data
}