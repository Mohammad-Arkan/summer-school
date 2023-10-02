import React, { useEffect, useState } from 'react';
import Instructor from './Instructor';

const Instructors  = () => {
    const [instructors, setInstructors] = useState()
    useEffect(()=> {
        fetch('teachers.json')
        .then(res => res.json())
        .then(data => {
            setInstructors(data)
        })
    },[])
    return (
        <div className='grid md:grid-cols-3 gap-5'>
            {
                instructors?.map(instructor => <Instructor
                key={instructor._id}
                instructor = {instructor}
                ></Instructor>)
            }
        </div>
    );
};

export default Instructors ;