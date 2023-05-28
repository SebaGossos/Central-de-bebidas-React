import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import '../build/css/app.css'
import { initFirebase } from './firebase/config'

initFirebase()

ReactDOM.createRoot(document.getElementById('root')).render(<App />)
