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
                        <div className="card bg-base-100 flex flex-col shadow-xl">
                            <figure className="m-5 bg-gray-400 rounded-md">
                                <img
                                className=" w-28 h-52  py-5 "
                                src={p.image}
                                alt="Book Iamge" />
                            </figure>
                            <div className="px-5">
                            <div className="flex items-center gap-4 mb-2">
                                {
                                    p.tags.map((item,index)=><div key={index}>
                                        <div className="badge badge-secondary text-sm">{item}</div>
                                    </div>)
                                }
                                
                            </div>
                                <h1 className="font-bold">{p.bookName}</h1>
                                <p className="text-sm text-gray-400 mb-2">By: {p.author}</p>
                                <hr />
                                
                            </div>
                            
                        </div>
                    </div>)
                }
            </div>
        </div>
    </div>
  )
}
