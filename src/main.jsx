import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Home from './Component/Home/Home';
import Statistics from './Component/Statistics/Statistics';
import Appliedjobs from './Component/Appliedjobs/Appliedjobs';
import Blog from './Component/Blog/Blog';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
    children:[{
      path:'home',
      element:<Home></Home>,
      loader:()=>fetch('category.json'),
    },
  {
    path:'statistic',
    element:<Statistics></Statistics>
  },

{
  path:'applied',
  element:<Appliedjobs></Appliedjobs>
},
{
  path:'blog',
  element:<Blog></Blog>
}

  ]
  },

]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>

    </RouterProvider>
  </React.StrictMode>,
);
