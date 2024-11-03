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

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children:[
      {
        path:'/',
        element:<Home></Home>,
        loader: ()=> fetch('../GadgetCategories.json'),
        children:[
          {
            path: '/category/:category_name',
            element: <Gadgets></Gadgets>,
            loader: ()=> fetch('../Gadgets.json'),
          }
        ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
