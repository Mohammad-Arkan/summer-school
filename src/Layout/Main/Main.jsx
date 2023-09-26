import { Outlet } from "react-router-dom";
import Navber from "../../Pages/HomePage/SharedPage/Navber/Navber";
import Footer from "../../Pages/HomePage/SharedPage/Footer/Footer";


const Main = () => {
    return (
        <div>
            <Navber></Navber>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;