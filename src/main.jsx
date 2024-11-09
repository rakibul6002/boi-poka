import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './components/MainRoot/MainRoot.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    children:[
   
      
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
