import { useLoaderData } from "react-router-dom"

export default function Books() {
    const data = useLoaderData();
    
    console.log(data);
    
  return (
    <div className="mt-10">
        <div>
            <div className="text-center my-5">
                <h1 className="text-2xl font-bold ">Books</h1>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                {
                    data.map((p)=><div key={p.bookId}>
                        <div className="bg-base-100 h-[520px]  shadow-xl flex flex-col ">
                            <div className="flex flex-col ">
                                <figure className="m-5 bg-gray-400 rounded-md">
                                    <img
                                    className=" w-28 h-52  py-5 mx-auto "
                                    src={p.image}
                                    alt="Book Iamge" />
                                </figure>
                            
                                <div className="flex flex-col px-5">
                                    <div className="flex items-center gap-4 mb-2">
                                        {
                                            p.tags.map((item,index)=><div key={index}>
                                                <div className="badge badge-secondary text-sm">{item}</div>
                                            </div>)
                                        }
                                    
                                    </div>
                                    <div className="flex-grow">
                                        <h1 className="font-bold">{p.bookName}</h1>
                                        <p className="text-sm text-gray-400 mb-2">By: {p.author}</p>
                                        <hr />
                                        <div className="">
                                            <div className=" flex items-center justify-between my-5">
                                                <div className="badge badge-secondary text-sm">{p.category}</div>
                                                <div>Rating: {p.rating}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="text-center ">
                                <button className="btn my-5">View Details</button>
                            </div>
                                </div>
                            
                            
                            </div>
                            
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
  )
}
