import React from 'react'
import ReactDOM from 'react-dom/client'
import Homepage from './Homepage.tsx'
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import './index.css'
import Signup from './Signup.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Homepage />,
  },
  {
    path: "/sign-up",
    element: <Signup />,
  },
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
