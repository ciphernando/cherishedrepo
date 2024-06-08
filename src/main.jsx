import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import Ardaas from './pages/ardaas.jsx'
import Brahamkavach from './pages/brahamkavach.jsx'
import Chaupaisahib from './pages/chaupaisahib.jsx'
import Japjisahib from './pages/japjisahib.jsx'
import Rehrassahib from './pages/rehrassahib.jsx'

import '../app/globals.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/ardaas",
    element: <Ardaas/>,
  },
  {
    path: "/brahamkavach",
    element: <Brahamkavach/>,
  },
  {
    path: "/chaupaisahib",
  element: <Chaupaisahib/>,
  },
  {
    path: "/japjisahib",
  element: <Japjisahib/>,
  },
  {
    path: "/rehrassahib",
    element: <Rehrassahib/>,
  },



  
]);
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <RouterProvider router={router} /> 
  </React.StrictMode>,
)
