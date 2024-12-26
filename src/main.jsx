import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Wishlist from './Wishlist.jsx'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Wishlist />
   
  </StrictMode>,
)
