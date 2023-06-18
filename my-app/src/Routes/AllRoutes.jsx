import { Route,Routes } from "react-router-dom";
import Landing from "../pages/Landing";
import Login from "../pages/Login";
import SingleProduct from "../pages/SingleProduct";
import Products from "../pages/Products";
import SingleDoctor from "../pages/SingleDoctor";
import MyAppointments from '../pages/MyAppointments'
import SignUp from '../pages/SignUp'

export default function AllRoutes(){

    return(
    <Routes>
        <Route path="/" element={<Landing/>}></Route>
        <Route path="/login" element={<Login/>}></Route>
        <Route path="/signup" element={<SignUp/>}></Route>

        <Route path="/services"  element={<Products/>}/>
        <Route path="/services/:id" element={<SingleProduct/>}/>
        <Route path="/services/:id/:doctorid" element={<SingleDoctor/>}></Route>
        <Route path="/appointments" element={<MyAppointments/>}/>
        <Route path="*" element={<h1>Page not Found</h1>}></Route>
    </Routes>
    )
}