import { useNavigate } from "react-router-dom";

/* eslint-disable react/prop-types */
function Card({ data }) {
  const { item_title, image, description, _id } = data;
  const navigate = useNavigate();

  const handleNavigate = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="card card-compact w-full bg-base-100 shadow-xl">
      <figure>
        <img
          className="h-56 opacity-70 hover:opacity-100 cursor-pointer transition-all w-full !bg-black"
          src={image}
          alt={item_title}
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{item_title}</h2>
        <p>{description}</p>
        <div className="card-actions justify-center">
          <button
            onClick={() => handleNavigate(_id)}
            className="btn btn-primary"
          >
            View Details
          </button>
        </div>
      </div>
    </div>
  );
}

export default Card;
