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
  stop_sign_detected: boolean
  traffic_light_status: number
  object_detected: boolean
  solar_battery_status: number
  engines_battery_status: number
}

const path = 'COM4'
const baudRate = 57600

const RECONNECT_INTERVAL = 5000;

let port: SerialPort;
let parser: ReadlineParser;

function isBoolean(value: any): value is boolean {
  return value === true || value === false;
}

function isNumber(value: any): value is number {
  return typeof value === 'number' && !isNaN(value);
}

function connectToArduino() {
  port = new SerialPort({ path, baudRate });
  parser = port.pipe(new ReadlineParser({ delimiter: '\n' }));

  port.on('open', () => {
    console.log('🚀 Conexão estabelecida com sucesso! Servidor rodando.')
  })

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

    if (serialData[0] && isBoolean(serialData[0] === '1')) validData.timer_started = serialData[0] === '1';
    
    if (serialData[1] && isNumber(parseInt(serialData[1]))) {
      const carControlMode = parseInt(serialData[1]);
      if (carControlMode >= 0 && carControlMode <= 4) {
        validData.car_control_mode = carControlMode;
      }
    }

    if (serialData[2] && isNumber(parseInt(serialData[2]))) validData.engine_status = parseInt(serialData[2]);
    
    if (serialData[3] && isNumber(parseFloat(serialData[3]))) {
      const rightWheelPWM = parseFloat(serialData[3]);
      if (rightWheelPWM >= 0 && rightWheelPWM <= 255) {
        validData.right_wheel_pwm = rightWheelPWM;
      }
    }
    
    if (serialData[4] && isNumber(parseFloat(serialData[4]))){
      const leftWheelPWM = parseFloat(serialData[4]);
      if (leftWheelPWM >= 0 && leftWheelPWM <= 255) {
        validData.left_wheel_pwm = leftWheelPWM;
      }
    }

    if (serialData[5] && isNumber(parseFloat(serialData[5]))) {
      const rightWheelSpeed = parseFloat(serialData[5]);
      if (rightWheelSpeed >= 0 && rightWheelSpeed <= 1.6) {
        validData.right_wheel_speed = rightWheelSpeed;
      }
    }
    
    if (serialData[6] && isNumber(parseFloat(serialData[6]))){
      const leftWheelSpeed = parseFloat(serialData[6]);
      if (leftWheelSpeed >= 0 && leftWheelSpeed <= 1.6) {
        validData.left_wheel_speed = leftWheelSpeed;
      }
    }

    if (serialData[7] && isNumber(parseFloat(serialData[7]))) validData.distance = parseFloat(serialData[7]);
    
    if (serialData[8] && isNumber(parseInt(serialData[8]))) {
      const steeringAngle = parseInt(serialData[8]);
      if (steeringAngle > -90 && steeringAngle < 90) {
        validData.steering_angle = steeringAngle;
      }
    }
    
    if (serialData[9] && isNumber(parseInt(serialData[9]))) {
      const carInclination = parseInt(serialData[9]);
      if (carInclination >= 0 && carInclination <= 360) {
        validData.car_inclination = carInclination;
      }
    }

    if (serialData[10] && isNumber(parseInt(serialData[10]))) {
      const trafficLightStatus = parseInt(serialData[10]);
      if (trafficLightStatus >= 0 && trafficLightStatus <= 3) {
        validData.traffic_light_status = trafficLightStatus;
      }
    }

    if (serialData[11] && isBoolean(serialData[11] === '1')) validData.stop_sign_detected = serialData[12] === '1'
    if (serialData[12] && isBoolean(serialData[12] === '1')) validData.object_detected = serialData[10] === '1'
    
    if (serialData[13] && isNumber(parseFloat(serialData[13]))){
      const solarBatteryStatus = parseFloat(serialData[13]);
      if (solarBatteryStatus >= 0 && solarBatteryStatus <= 12) {
        validData.solar_battery_status = solarBatteryStatus;
      }
    }
    
    if (serialData[14] && isNumber(parseFloat(serialData[14]))){
      const enginesBatteryStatus = parseFloat(serialData[14]);
      if (enginesBatteryStatus >= 0 && enginesBatteryStatus <= 12) {
        validData.engines_battery_status = enginesBatteryStatus;
      }
    }

    if (Object.keys(validData).length > 0) {
        console.log(validData)
        dataRef.update({ is_arduino_connected: true, ...validData });
    }
  })
}

connectToArduino()

