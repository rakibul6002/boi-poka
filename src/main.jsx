import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './components/MainRoot/MainRoot.jsx';
import Home from './components/Home/home.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('./booksData.json')
      },
      
      
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
