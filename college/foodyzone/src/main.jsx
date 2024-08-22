import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Login from './login'
import RegistrationForm from './registration'
import Hero from './homepage'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Login />
    <RegistrationForm />
    <Hero />
  </StrictMode>
)

