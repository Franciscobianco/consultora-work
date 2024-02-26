import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

//const globalapp = require('./App.jsx')
//require('dotenv').config()

//const PORT = process.env.PORT || 3333
//app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
