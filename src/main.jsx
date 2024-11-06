import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  Outlet,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root.jsx';
import Home from './components/Home/Home.jsx';
import Statistics from './components/Statistics/Statistics.jsx';
import Dashboard from './components/Dashboard/Dashboard.jsx';
import Gadgets from './components/Gadgets/Gadgets.jsx';
import GadgetDetails from './components/GadgetDetails/GadgetDetails.jsx';
import Cart from './components/Dashboard/Cart.jsx';
import WishList from './components/Dashboard/WishList.jsx';
import 'react-toastify/dist/ReactToastify.css';
import { HelmetProvider } from 'react-helmet-async';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs.jsx';
import ErrorPage from './components/ErrorPage/ErrorPage.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    loader: () => fetch('../GadgetCategories.json'),
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: () => fetch('../GadgetCategories.json'),
        children: [
          {
            path: '/',
            element: <Gadgets></Gadgets>,
            loader: () => fetch('../Gadgets.json'),
          },
          {
            path: '/category/:category',
            element: <Gadgets></Gadgets>,
            loader: () => fetch('../Gadgets.json'),
          },
        ]
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
        loader: () => fetch('/Gadgets.json'),
      },
      {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        loader: () => fetch('/Gadgets.json'),
        children: [
          {
            path: '/dashboard', 
            element: <Cart></Cart>,
            loader: () => fetch('../Gadgets.json'),
          },
          {
            path: 'cart', 
            element: <Cart></Cart>,
            loader: () => fetch('../Gadgets.json'),
          },
          {
            path: 'wishlist', 
            element: <WishList></WishList>,
            loader: () => fetch('../Gadgets.json'),
          }
        ]

      },
      {
        path: '/:category/:product_id',
        element: <GadgetDetails></GadgetDetails>,
        loader: () => fetch('/Gadgets.json'),
      },
      {
        path: '/WhyChooseUs',
        element: <WhyChooseUs></WhyChooseUs>
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <HelmetProvider>
      <RouterProvider router={router} ></RouterProvider>
    </HelmetProvider>
    

  </StrictMode>,
)
