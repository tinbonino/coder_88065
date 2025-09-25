import React from 'react'
import ReactDOM from 'react-dom/client'
import CreateItem from './createItem.jsx'
import App from './App.jsx'
import TraerCollection from './TraerCollection.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC_I7EyvXeaoRKNYHxSg2egjjNDY0sM7so",
  authDomain: "coder-88065.firebaseapp.com",
  projectId: "coder-88065",
  storageBucket: "coder-88065.firebasestorage.app",
  messagingSenderId: "1001945833087",
  appId: "1:1001945833087:web:0a259cc9e3aaa5638f694a"
};

// Initialize Firebase
initializeApp(firebaseConfig);


ReactDOM.createRoot(document.getElementById('root')).render(
  <>
    <App />
    {/* <CreateItem/> */}
    <TraerCollection/>
  </>,
)
