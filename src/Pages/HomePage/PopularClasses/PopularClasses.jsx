import { useEffect, useState } from "react";
import PopularClass from "./PopularClass";

const PopularClasses = () => {
    const [popularClasses, setPopularClasses] = useState()
     useEffect(()=> {
        fetch('http://localhost:5000/classes')
        .then(res => res.json())
        .then(data => {
            const popularItems = data.filter( item => item.category === 'popular' )
            setPopularClasses(popularItems)
        })
     },[])
    return (
        <div className="grid md:grid-cols-3 gap-5">
            {
                popularClasses?.map(popularClass => <PopularClass
                key={popularClass._id}
                popularClass = {popularClass}
                ></PopularClass>)
            }
        </div>
    );
};

export default PopularClasses;