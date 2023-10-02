import React from 'react';

const PopularClass = ({popularClass}) => {
    const{name, recipe, image, price} = popularClass
    return (
        <div>
            <img src={image} alt="" />
            <p>Class: {name}</p>
            <p>Student:{price}</p>
        </div>
    );
};

export default PopularClass;