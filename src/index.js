import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {createBrowserRouter,RouterProvider} from "react-router-dom";
import Resume from "./pages/Resume";

const router = createBrowserRouter([
    {
        path:"/",
        element:<App/>
    },
    {
        path:"/resume",
        element:<Resume/>
    }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}/>
);

