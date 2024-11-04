import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Gadgets from './components/Gadgets/Gadgets.jsx';
import GadgetDetails from './components/GadgetDetails/GadgetDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    loader: ()=> fetch('../GadgetCategories.json'),
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('../GadgetCategories.json'),
        children:[
          {
            path: '/',
            element: <Gadgets></Gadgets>,
            loader: ()=> fetch('../Gadgets.json'),
          },
          {
            path: '/category/:category',
            element: <Gadgets></Gadgets>,
            loader: ()=> fetch('../Gadgets.json'),
          },
        ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      },
      {
        path: '/:category/:product_id',
        element: <GadgetDetails></GadgetDetails>,
        loader: ()=> fetch('/Gadgets.json'),
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
