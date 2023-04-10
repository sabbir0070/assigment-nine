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
import JobDetails from './Component/JobDetails/JobDetails';

const router = createBrowserRouter([
  {
    path: "/",
    element:<App></App>,
   
    
    children:[{
      path:'/',
      element:<Home></Home>,
      loader:()=>fetch('jobData.json'),
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
},
{
  path:'/:id',
  element:<JobDetails></JobDetails>,
  
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
