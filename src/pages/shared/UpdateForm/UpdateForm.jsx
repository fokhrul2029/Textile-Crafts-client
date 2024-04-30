/* eslint-disable react/prop-types */

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function UpdateForm({ data }) {
  const { 
    image: img,
    subcategory_Name: subcategory,
    item_name: title,
    description: des,
    price: p,
    rating: r,
    processing_time: process_time,
    customization: customize,
    stockStatus: stockS,
  } = data;
  const navigate = useNavigate();
  const [image, setImage] = useState(img);
  const [item_name, setItem_name] = useState(title);
  const [subcategory_Name, setSubcategory_Name] = useState(subcategory);
  const [description, setDescription] = useState(des);
  const [price, setPrice] = useState(p);
  const [rating, setRating] = useState(r);
  const [processing_time, setProcessing_time] = useState(process_time);
  const [customization, setCustomization] = useState(customize);
  const [stock_status, setStockStatus] = useState(stockS);

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      image,
      item_name,
      subcategory_Name,
      description,
      price,
      rating,
      processing_time,
      customization,
      stock_status,
    };
    fetch(`https://backend-md-fokhrul-islams-projects.vercel.app/all-data/update/${data._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then(() => {
        swal({
          title: "Good job!",
          text: "Data successfully Updated!",
          icon: "success",
        });
      })
      .catch((error) => {
        console.error(error)
        swal({
          title: "Something went wrong!",
          text: "Data update failed!",
          icon: "warning",
        });
      });
  };

  return (
    <div className="mx-auto px-4 md:px-10 lg:px-14 py-20 shadow-xl rounded-lg shadow-gray-500">
      <h1 className="text-3xl font-bold mb-6">Update Art & Craft Item</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="image"
              className="block text-sm font-medium text-gray-700"
            >
              Image URL
            </label>
            <input
              required
              type="text"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md input input-bordered"
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div>
            <label
              htmlFor="item_name"
              className="block text-sm font-medium text-gray-700"
            >
              Item Name
            </label>
            <input
              required
              type="text"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md input input-bordered"
              value={item_name}
              onChange={(e) => setItem_name(e.target.value)}
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="subcategory_name"
            className="block text-sm font-medium text-gray-700"
          >
            Subcategory Name
          </label>
          <select
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md select select-bordered"
            value={subcategory_Name}
            onChange={(e) => setSubcategory_Name(e.target.value)}
            required
          >
            <option value="Embroidery">Embroidery</option>
            <option value="Knitting & Crocheting">Knitting & Crocheting</option>
            <option value="Quilting">Quilting</option>
            <option value="Beadwork">Beadwork</option>
            <option value="Tie-Dyeing">Tie-Dyeing</option>
            <option value="Macrame">Macrame</option>
          </select>
        </div>
        <div>
          <label
            htmlFor="short_description"
            className="block text-sm font-medium text-gray-700"
          >
            Short Description
          </label>
          <textarea
            required
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            rows="3"
            className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md textarea textarea-bordered"
          ></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-gray-700"
            >
              Price
            </label>
            <input
              type="number"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md input input-bordered"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
            />
          </div>
          <div>
            <label
              htmlFor="rating"
              className="block text-sm font-medium text-gray-700"
            >
              Rating
            </label>
            <input
              type="number"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md input input-bordered"
              value={rating}
              onChange={(e) => setRating(e.target.value)}
              required
            />
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="customization"
              className="block text-sm font-medium text-gray-700"
            >
              Customization
            </label>
            <select
              className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md select select-bordered"
              value={customization}
              onChange={(e) => setCustomization(e.target.value)}
              required
            >
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="processing_time"
              className="block text-sm font-medium text-gray-700"
            >
              Processing Time
            </label>
            <input
              type="text"
              className="mt-1 focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md input input-bordered"
              value={processing_time}
              onChange={(e) => setProcessing_time(e.target.value)}
              required
            />
          </div>
        </div>
        <div>
          <label
            htmlFor="stock_status"
            className="block text-sm font-medium text-gray-700"
          >
            Stock Status
          </label>
          <select
            className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md select select-bordered"
            value={stock_status}
            onChange={(e) => setStockStatus(e.target.value)}
            required
          >
            <option value="In stock">In stock</option>
            <option value="Made to Order">Made to Order</option>
          </select>
        </div>
        <div className="flex gap-2 items-center">
          <button
            className="inline-block bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
            onClick={() => navigate(-1)}
          >
            {" "}
            Back
          </button>
          <button
            type="submit"
            className="inline-block bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
}

export default UpdateForm;
