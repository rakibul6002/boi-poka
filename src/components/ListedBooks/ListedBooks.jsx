import { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { addReadlist, getReadlist, getWishlist, removeReadList, removeWishList } from '../Utilities/Localstoreg';
export default function ListedBooks() {
    const [readlist,setReadlist]=useState([]);
    const [wishlist,setWishlist]= useState([])
    const data = useLoaderData();

    useEffect(()=>{
        const readList = getReadlist();
        const allBook = data.filter(book=>readList.includes(book.bookId));
        setReadlist(allBook)
    },[data]);
    useEffect(()=>{
        const wishList = getWishlist();
        const allBook = data.filter(book=>wishList.includes(book.bookId));
        setWishlist(allBook)
    },[data]);
    
    const handleRmvReadList = (id)=>{
        removeReadList(id);
        setReadlist((prevReadlist) => prevReadlist.filter(book => book.bookId !== id));
    }
    const handleRmvWishList = (id)=>{
        removeWishList(id);
        setWishlist((prevReadlist) => prevReadlist.filter(book => book.bookId !== id));
    }
    const markAsRead = (id) => {
        handleRmvWishList(id);
        addReadlist(id);
        const book = data.find(book => book.bookId === id);
        if (book) setReadlist(prevReadlist => [...prevReadlist, book]);
    };
    
  return (
    <div>
        <div className="text-center bg-gray-200 py-10">
            <h1 className="text-2xl font-bold">Listed Books</h1>
        </div>
        <div>
        <Tabs>
            <TabList>
            <Tab>Read List</Tab>
            <Tab>Wish List</Tab>
            </TabList>

            <TabPanel>
            <div>
                <h1>Read List</h1>
                <div>
                    {
                        readlist.map((item)=>
                        <div key={item.bookId}>
                            <div className="card bg-base-100 w-full shadow-xl my-5">
                                <div className="card-body">
                                    <div className="card-actions justify-end">
                                    <button onClick={()=>handleRmvReadList(item.bookId)} className="btn btn-square btn-sm">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    </div>
                                    <div className='flex gap-10 '>
                                        <img
                                        className='w-20' 
                                        src={item.image} 
                                        alt="" />
                                    <p className='text-xl font-bold'>{item.bookName}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
            </TabPanel>
            <TabPanel>
            <div>
                <h1>Wish List</h1>
                <div>
                    {
                        wishlist.map((item)=>
                        <div key={item.bookId}>
                            <div className="card bg-base-100 w-full shadow-xl my-5">
                                <div className="card-body">
                                    <div className="card-actions justify-end">
                                    <button onClick={()=>handleRmvWishList(item.bookId)} className="btn btn-square btn-sm">
                                        <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor">
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                    </div>
                                    <div className='flex gap-10 '>
                                        <img
                                        className='w-20' 
                                        src={item.image} 
                                        alt="" />
                                    <div className='flex flex-col'>
                                        <p className='text-xl font-bold'>{item.bookName}</p>
                                        <div className='flex items-center gap-5'>
                                        <Link to={`/products/${item.bookId}`}><button className="btn btn-outline btn-warning">View Details</button></Link>
                                        <button onClick={() => markAsRead(item.bookId)} className="btn btn-outline btn-success">Mark as Read</button>
                                        </div>
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        )
                    }
                </div>
            </div>
            </TabPanel>
        </Tabs>
        </div>
    </div>
  )
}
