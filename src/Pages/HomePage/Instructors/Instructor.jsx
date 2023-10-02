import React from 'react';

const Instructor = ({instructor}) => {
    const {image, name, email} = instructor
    return (
        <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={image} alt="Movie"/></figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <p>Email: {email}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Watch</button>
          </div>
        </div>
      </div>
    );
};

export default Instructor;