import { useEffect, useState } from "react";
import Class from "./Class";

const Classes = () => {
    const [classes, setClasses] = useState()
    useEffect(()=> {
        fetch('http://localhost:5000/allclass')
        .then(res=> res.json())
        .then(data => {
            setClasses(data)
        })
    },[])
    return (
        <div className="grid grid-cols-3 py-48">
           {
            classes?.map(classe => <Class
                key={classe._id}
                classe= {classe}
                ></Class>)
           }
        </div>
    );
};

export default Classes;