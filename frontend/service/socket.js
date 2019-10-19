import socketService from '../utils/SocketService'
import { async } from 'rxjs/internal/scheduler/async';

export const sendTimer = (channel,data) => {
    socketService.emit(channel,data);
}

export const receiveTimer = (channel) => {
    return socketService.on(channel);
}