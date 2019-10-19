import ENV from '../config/envConfig'
import io from 'socket.io-client'
// const socket = io.connect(ENV.PATH_SOCKET)

const socketService = {
  emit(channel,data){
    socket.emit(channel,data);
  },
  on(channel){
    return socket(channel,data => {
      return data;
    });
  }
}

export default socketService;
