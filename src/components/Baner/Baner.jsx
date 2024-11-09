import banerimage from '../../assets/books.jpg'
export default function Baner() {
  return (
    <div className="hero bg-base-200 min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse">
            <img
            src={banerimage}
            className="max-w-sm rounded-lg shadow-2xl" />
            <div>
            <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
            <button className="btn btn-primary mt-5">View The List</button>
            </div>
        </div>
    </div>
  )
}
