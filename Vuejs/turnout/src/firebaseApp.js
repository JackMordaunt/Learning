import firebase from 'firebase'

const config = {
        apiKey: 'AIzaSyD6o6oeXWCPh5Ffj7OMNd3Ag141sQfHtu8',
        authDomain: 'turnout-ecb43.firebaseapp.com',
        databaseURL: 'https://turnout-ecb43.firebaseio.com',
        projectId: 'turnout-ecb43',
        storageBucket: 'turnout-ecb43.appspot.com',
        messagingSenderId: '260657842870'
}

export const firebaseApp = firebase.initializeApp(config)