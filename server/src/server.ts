import ioClient from 'socket.io-client';
import { SerialPort, ReadlineParser } from 'serialport'
import { applicationDefault, initializeApp } from 'firebase-admin/app';
import { getDatabase } from 'firebase-admin/database';

const firebase = initializeApp({
  credential: applicationDefault(),
  databaseURL: 'https://carai-dashboard-default-rtdb.firebaseio.com'
});

const db = getDatabase(firebase)
const dataRef = db.ref('data')

interface ArduinoDataType {
  timer_started: boolean
  car_control_mode: number
  engine_status: number
  right_wheel_pwm: number
  left_wheel_pwm: number
  right_wheel_speed: number
  left_wheel_speed: number
  distance: number
  steering_angle: number
  car_inclination: number
  object_detected: boolean
  traffic_light_status: number
  stop_sign_detected: boolean
  solar_battery_status: number
  engines_battery_status: number
}

const path = 'COM4'
const baudRate = 57600

const RECONNECT_INTERVAL = 5000;

let port: SerialPort;
let parser: ReadlineParser;

function connectToArduino() {
  port = new SerialPort({ path, baudRate });
  parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

  port.on('close', () => {
    console.log('Conexão com a porta serial perdida. Tentando reconectar em 5 segundos...');
    dataRef.update({ is_arduino_connected: false })
    setTimeout(connectToArduino, RECONNECT_INTERVAL);
  })

  port.on('error', (err) => {
    console.error('Erro na porta serial:', err.message);
    console.log('Tentando reconectar em 5 segundos...');
    setTimeout(connectToArduino, RECONNECT_INTERVAL);
  })

  parser.on('data', (data) => {
    const serialData = data.toString().split(',')

    const validData: Partial<ArduinoDataType> = {};

    if (serialData[0]) validData.timer_started = serialData[0] === '1';
    if (serialData[1]) validData.car_control_mode = parseInt(serialData[1]);
    if (serialData[2]) validData.engine_status = parseInt(serialData[2]);
    if (serialData[3]) validData.right_wheel_pwm = parseInt(serialData[3]);
    if (serialData[4]) validData.left_wheel_pwm = parseInt(serialData[4]);
    if (serialData[5]) validData.right_wheel_speed = parseInt(serialData[5]);
    if (serialData[6]) validData.left_wheel_speed = parseInt(serialData[6]);
    if (serialData[7]) validData.distance = parseInt(serialData[7]);
    if (serialData[8]) validData.steering_angle = parseInt(serialData[8]);
    if (serialData[9]) validData.car_inclination = parseInt(serialData[9]);
    if (serialData[10]) validData.object_detected = serialData[10] === '1';
    if (serialData[11]) validData.traffic_light_status = parseInt(serialData[11]);
    if (serialData[12]) validData.stop_sign_detected = serialData[12] === '1';
    if (serialData[13]) validData.solar_battery_status = parseInt(serialData[13]);
    if (serialData[14]) validData.engines_battery_status = parseInt(serialData[14]);

    if (Object.keys(validData).length > 0) {
        dataRef.update({ is_arduino_connected: true, ...validData });
    }
  })
}

connectToArduino()

