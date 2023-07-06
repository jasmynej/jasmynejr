import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Services from "./pages/Services";
import Contact from "./pages/Contact";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/resume",
        element:<Resume/>
    },
    {
        path:"/skills",
        element:<Skills/>
    },
    {
        path:"/services",
        element:<Services/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

