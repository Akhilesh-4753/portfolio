import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './components/chatbot/chatbot.css'
import App from './App.jsx'
import { initChatbot } from './components/chatbot/chatbot.js'

initChatbot();

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
