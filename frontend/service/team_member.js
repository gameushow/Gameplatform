import ApiService from "../utils/ApiService";

export const getTeamList = async () => {
    let res = await ApiService.get('/game/1/teams')
    return res.data
}
export const getTeamListById = async () => {
    let res = await ApiService.get(`/game/1/team/${team_id}`)
    return res.data
}
export const postTeamList = async (data) => {
    let res = await ApiService.post(`/game/1/team`, data)
    return res.data
}
export const putTeamListById = async (data) => {
    let res = await ApiService.put(`/game/1/team/${data.id}`, data)
    return res.data
}
export const deleteTeamListById = async (data) => {
    let res = await ApiService.delete(`/game/1/team/${data.id}`, data)
    return res.data
}


