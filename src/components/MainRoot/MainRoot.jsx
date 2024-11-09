import { Helmet } from "react-helmet";
import Navbar from "../Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../Footer/Footer";


export default function MainRoot() {
  return (
    <div className="max-w-screen-lg mx-auto">
        <Helmet>
            <title>Boi Poka || Boi Poka</title>
        </Helmet>
        <div> 
            <Navbar></Navbar>
            <Outlet></Outlet>
            <div className="mt-10">
                <Footer></Footer>
            </div>
        </div>
    </div>
  )
}