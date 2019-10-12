import ApiService from "../utils/ApiService";

const getTeamList = async () => {
    let res = await ApiService.get('/game/1/teams')
    return res.data
}
const getTeamListById = async () => {
    let res = await ApiService.get(`/game/1/team/${team_id}`)
    return res.data
}
const postTeamList = async (data) => {
    let res = await ApiService.post(`/game/1/team`, data)
    return res.data
}
const putTeamListById = async (data) => {
    let res = await ApiService.put(`/game/1/team/${team_id}`, data)
    return res.data
}
const deleteTeamListById = async (data) => {
    let res = await ApiService.delete(`/game/1/team/${team_id}`, data)
    return res.data
}


