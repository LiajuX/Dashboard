import ioClient from 'socket.io-client';
import { SerialPort, ReadlineParser } from 'serialport'

interface ArduinoDataType {
  timerStarted: boolean
  carControlMode: number
  engineStatus: number
  rightWheelPwm: number
  leftWheelPwm: number
  rightWheelSpeed: number
  leftWheelSpeed: number
  distance: number
  steeringAngle: number
  carInclination: number
  stopSignDetected: boolean
  trafficLightStatus: number
  objectDetected: boolean
  solarBatteryStatus: number
  enginesBatteryStatus: number
}

const path = 'COM4'
const baudRate = 57600

const RECONNECT_INTERVAL = 5000;

let port: SerialPort;
let parser: ReadlineParser;

const socket = ioClient('http://localhost:8080');

socket.on('connect', () => {
  console.log('🚀 Conexão com o servidor remoto estabelecida!');
});

function connectToArduino() {
  port = new SerialPort({ path, baudRate });
  parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

  port.on('close', () => {
    console.log('Conexão com a porta serial perdida. Tentando reconectar em 5 segundos...');
    setTimeout(connectToArduino, RECONNECT_INTERVAL);
  });

  port.on('error', (err) => {
    console.error('Erro na porta serial:', err.message);
    console.log('Tentando reconectar em 5 segundos...');
    setTimeout(connectToArduino, RECONNECT_INTERVAL);
  });

  parser.on('data', (data) => {
    const serialData = data.toString().split(',')

    const arduinoData: ArduinoDataType = {
      timerStarted: serialData[0] === '1',
      carControlMode: parseInt(serialData[1]),
      engineStatus: parseInt(serialData[2]),
      rightWheelPwm: parseInt(serialData[3]),
      leftWheelPwm: parseInt(serialData[4]),
      rightWheelSpeed: parseInt(serialData[5]),
      leftWheelSpeed: parseInt(serialData[6]),
      distance: parseInt(serialData[7]),
      steeringAngle: parseInt(serialData[8]),
      carInclination: parseInt(serialData[9]),
      objectDetected: serialData[10] === '1',
      trafficLightStatus: parseInt(serialData[11]),
      stopSignDetected: serialData[12] === '1',
      solarBatteryStatus: parseInt(serialData[13]),
      enginesBatteryStatus: parseInt(serialData[14]),
    }

    if (arduinoData) {
      socket.emit('arduinoData', arduinoData)
    }
  })
}

connectToArduino();

