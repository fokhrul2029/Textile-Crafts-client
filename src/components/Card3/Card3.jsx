/* eslint-disable react/prop-types */
 

const Card3 = ({ data, onUpdate, onDelete }) => {
  const { image, item_name, price, rating, customization, stockStatus } = data;

  return (
    <div className="bg-gray-400 shadow-md rounded-lg overflow-hidden my-6">
      <img src={image} alt={item_name} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-xl font-semibold">{item_name}</h2>
        <p className="text-gray-600">Price: {price}</p>
        <p className="text-gray-600">Rating: {rating}</p>
        <p className="text-gray-600">Customization: {customization}</p>
        <p className="text-gray-600">Stock Status: {stockStatus}</p>
      </div>
      <div className="flex justify-end p-4">
        <button onClick={onUpdate} className="btn btn-sm btn-primary mr-2">Update</button>
        <button onClick={onDelete} className="btn btn-sm btn-secondary">Delete</button>
      </div>
    </div>
  );
};

export default Card3;
