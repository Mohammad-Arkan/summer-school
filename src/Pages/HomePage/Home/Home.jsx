import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import Instructors from "../Instructors/Instructors ";
import PopularClasses from "../PopularClasses/PopularClasses";

const Home = () => {
    return (
        <div>
            <Helmet><title>Summer School || Home</title> </Helmet>
            <Banner></Banner>
            <PopularClasses></PopularClasses>
            <Instructors></Instructors>
        </div>
    );
};

export default Home;