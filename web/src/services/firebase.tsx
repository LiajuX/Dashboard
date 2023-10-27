import { initializeApp } from 'firebase/app'
import { getDatabase, ref } from 'firebase/database'

const firebaseConfig = {
  apiKey: 'AIzaSyB-1kUdtBig2tBm0YveWwmsaU9_urPt7kU',
  authDomain: 'carai-dashboard.firebaseapp.com',
  databaseURL: 'https://carai-dashboard-default-rtdb.firebaseio.com',
  projectId: 'carai-dashboard',
  storageBucket: 'carai-dashboard.appspot.com',
  messagingSenderId: '502588084413',
  appId: '1:502588084413:web:9b33e729ad912a9540e7d4',
  measurementId: 'G-5X0V87N5EM',
}

const firebase = initializeApp(firebaseConfig)
const database = getDatabase(firebase)
const dataRef = ref(database, 'data')

export { dataRef }
