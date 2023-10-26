import { Server } from 'socket.io';
import express from 'express';
import http from 'http';
import { SerialPort, ReadlineParser } from 'serialport'

const app = express();
const server = http.createServer(app);
const io = new Server(server);

const path = 'COM4'
const baudRate = 57600

const serialPort = new SerialPort({ path, baudRate })
const parser = serialPort.pipe(new ReadlineParser({ delimiter: '\n' }))

parser.on('data', (line: string) => {
  // Os dados do Arduino estão disponíveis na variável "line"
  // Você pode analisar os valores separados por vírgulas e enviá-los por WebSocket
  const values = line.split(',');
  const data = {
    started: Boolean(parseInt(values[0])),
    mode: parseInt(values[1]),
    status: parseInt(values[2]),
    rightWheelPwm: parseInt(values[3]),
    leftWheelPwm: parseInt(values[4]),
    rightWheelSpeed: parseFloat(values[5]),
    leftWheelSpeed: parseFloat(values[6]),
    distance: parseFloat(values[7]),
    angle: parseInt(values[8]),
    objectDetected: Boolean(parseInt(values[9])),
    trafficLight: parseInt(values[10]),
    stopSign: Boolean(parseInt(values[11])),
    batteryStatus1: parseInt(values[12]),
    batteryStatus2: parseInt(values[13]),
    batteryStatus3: parseInt(values[14]),
  };

  // Emita os dados para os clientes conectados via WebSocket
  io.emit('arduinoData', data);
});

// Inicie o servidor WebSocket
io.on('connection', (socket) => {
  console.log('Cliente WebSocket conectado');
});

server.listen(3000, () => {
  console.log('Servidor local está ouvindo na porta 3000');
});
