import { Server } from 'socket.io';

const io = new Server({
  cors: {
    origin: "http://localhost:3000"
  }
})

io.listen(8080)

io.on('connection', (socket) => {
  console.log('Cliente conectado.')

  socket.on('arduinoData', (data) => {
    console.log(`\nDados recebidos: ${data}`)
    io.emit('arduinoData', data);
  })

  socket.on('disconnect', () => {
    console.log('Cliente desconectado.');
  });
});

console.log('🚀 Servidor WebSocket rodando na porta 8080');
