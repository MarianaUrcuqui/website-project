import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom'

// const router = createBrowserRouter([
//   {
//     path: '/website-project//*',
//     element:<App />,
//   }
// ])
// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter basename="/website-project">
        <App />
    </BrowserRouter>
);