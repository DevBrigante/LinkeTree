import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { router } from './App'
import { RouterProvider } from 'react-router-dom'
import './index.css'
import { ToastContainer } from "react-toastify";

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer autoClose={3000} />
  </StrictMode>,
)
