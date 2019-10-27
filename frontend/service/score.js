import ApiService from "../utils/ApiService";

export const getScore = async () => {
    let res = await ApiService.get('/game/1/scores')
    return res.data
}
export const postScore = async (data) => {
    let res = await ApiService.post(`/game/1/score`, data)
    return res.data
}
export const putScoreByTeamId = async (data,team_id) => {
    let res = await ApiService.put(`/game/1/score/${team_id}`, data)
    return res.data
}


