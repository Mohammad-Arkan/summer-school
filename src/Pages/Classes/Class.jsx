import school1 from '../../../src/assets/classes/school-1.jfif'
const Class = ({classe}) => {
    const {_id, availableSeats, price, instructorName, image,className } = classe
    // console.log(image)
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
          <img src={image} alt="Image" />
  {/* <figure><img src={image} alt="Image" /></figure> */}
  <div className="card-body">
    <h2 className="card-title">{className}</h2>
    <p>Instructor: {instructorName}</p>
    <div className="card-actions justify-end">
      <p>Price: ${price}</p>
      <p>Seat: ${availableSeats}</p>
      <button className="btn btn-primary">Select</button>
    </div>
  </div>
</div>
    );
};

export default Class;