import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainRoot from './components/MainRoot/MainRoot.jsx';
import Home from './components/Home/Home.jsx';
import ProductDetails from './components/ProductDetails/ProductDetails.jsx';
import ListedBooks from './components/ListedBooks/ListedBooks.jsx';


const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoot></MainRoot>,
    children:[
      {
        path: "/",
        element: <Home></Home>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path: "/listedBooks",
        element: <ListedBooks></ListedBooks>,
        loader: ()=> fetch('/booksData.json')
      },
      {
        path: "/products/:id",
        element: <ProductDetails></ProductDetails>,
        loader: ()=> fetch('/booksData.json')
      },
      
      
    ]
  },
]);


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
