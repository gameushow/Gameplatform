import ENV from '../config/envConfig'
import io from 'socket.io-client'

const socket = io.connect(ENV.PATH_SOCKET);

const socketService = {
    getSocketInstant(){
        return socket;
    },
    sendTimer(time) {
        socket.emit("boardCastTimeForTimer",time);
    },
    sendStartGame(boolean) {
        socket.emit("boardCastStartGame",boolean);
    },
    sendScore(score) {
        socket.emit("boardCastScore",score);
    },
    sendRandomTeam(teams) {
        const randomIndex = Math.floor(Math.random()*teams.length) + 1;
        const randomTeam = teams[randomIndex];
        socket.emit("boardCastRandomTeam",randomTeam);
    },
    sendQuestion(question) {
        socket.emit("boardCastSendQuestion",question);
    }
}

export default socketService
