/* eslint-disable react/prop-types */
function DetailsCard({ data }) {
    const {
      image,
      item_name,
      description,
      price,
      rating,
      processing_time,
      stockStatus,
      userObj,
      customization,
    } = data;
  
    return (
      <div className="bg-white rounded-lg overflow-hidden shadow-lg">
        <div className="relative">
          <img src={image} alt={item_name} className="w-full h-64 object-cover" />
          {customization === "yes" && (
            <span className="absolute top-0 right-0 bg-green-500 text-white py-1 px-3 rounded-bl-lg font-semibold">
              Customizable
            </span>
          )}
          <div className="absolute top-0 left-0 p-2 bg-gray-800 text-white rounded-tr-lg">
            <p className="font-bold text-lg">${price}</p>
          </div>
        </div>
        <div className="p-6">
          <h2 className="text-2xl font-semibold mb-4">{item_name}</h2>
          <p className="text-gray-700 mb-6">{description}</p>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div>
              <p className="text-gray-600">Rating: {rating}</p>
            </div>
            <div>
              <p className="text-gray-600">Processing Time: {processing_time}</p>
              <p className="text-gray-600">Stock Status: {stockStatus}</p>
            </div>
          </div>
          <div className="text-gray-800">
            <p className="font-semibold">By: {userObj.userName}</p>
            <p className="text-sm">Contact: {userObj.userEmail}</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default DetailsCard;
  