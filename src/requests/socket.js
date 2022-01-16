import io, {Socket} from 'socket.io-client'

export default function sendSocketMessage(id, url, msg) {
  const socket = io(url);

  socket.emit('join', id)
  socket.emit('text', {roomId: id, content: msg})
}