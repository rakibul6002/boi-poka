import { useLoaderData, useParams } from "react-router-dom"
import { addReadlist, addWishlist } from "../Utilities/Localstoreg";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export default function ProductDetails() {
    const data = useLoaderData();
    const {id} = useParams();
    const bookid = parseInt(id)
    const book = Array.isArray(data) ? data.find(b => b.bookId === bookid) : null;
   
    
    const handleReadList = (id) => {
      addReadlist(id);
      toast.success("Book added to read list!");
      
    }
    const handleWishList = (id) => {
      addWishlist(id);
      toast.success("Book added to wish list!");
      
    }
   
    
    

  return (
    <div>
        <div>
          <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure className="bg-gray-400 p-8 m-10 rounded-2xl">
              <img
              className="w-44 h-60 "
                src={book.image}
                alt="Album" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{book.bookName}</h2>
              <p>By: {book.author}</p>
              <div className="card-actions justify-end">
                <button onClick={()=>handleReadList(book.bookId)} className="btn btn-success">Mark as Read</button>
                <button onClick={()=>handleWishList(book.bookId)} className="btn btn-error">Wishlist</button>
              </div>
            </div>
          </div>
        </div>
        <ToastContainer />
    </div>
  )
}
