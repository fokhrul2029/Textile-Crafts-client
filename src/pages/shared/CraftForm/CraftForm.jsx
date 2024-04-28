import { useContext, useState } from "react";
import { AuthContext } from "../../../contextApi/AuthProvider";

function CraftForm() {
  const { user } = useContext(AuthContext);

  const [image, setImage] = useState(null);
  const [item_name, setItem_name] = useState(null);
  const [subcategory_Name, setSubcategory_Name] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [rating, setRating] = useState(null);
  const [customization, setCustomization] = useState(null);
  const [processing_time, setProcessing_time] = useState(null);
  const [stockStatus, setStockStatus] = useState(null);
  const [userName] = useState(user.displayName);
  const [userEmail] = useState(user.email);

  const handleAddForm = (e) => {
    e.preventDefault();
    const item = {
      image,
      item_name,
      subcategory_Name,
      description,
      price,
      rating,
      customization,
      processing_time,
      stockStatus,
      userName,
      userEmail,
    };
    console.log(item);
  };

  return (
    <div>
      <div className="card shrink-0 w-full md:w-[550xp] mx-auto max-w-sm shadow-2xl bg-base-100">
        <form onSubmit={handleAddForm} className="card-body">
          <h1 className="text-center text-3xl font-semibold">Add Craft Item</h1>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Item Name</span>
            </label>
            <input
              type="text"
              placeholder="Item Name"
              className="input input-bordered"
              required
              value={item_name}
              onChange={(e) => setItem_name(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Photo Url</span>
            </label>
            <input
              type="text"
              placeholder="Photo URL"
              className="input input-bordered"
              required
              value={image}
              onChange={(e) => setImage(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <input
              type="text"
              placeholder="Subcategory Name"
              className="input input-bordered"
              required
              value={subcategory_Name}
              onChange={(e) => setSubcategory_Name(e.target.value)}
            />
          </div> 
          <div className="form-control">
            <label className="label">
              <span className="label-text">Subcategory Name</span>
            </label>
            <input
              type="text"
              placeholder="Subcategory Name"
              className="input input-bordered"
              required
              value={subcategory_Name}
              onChange={(e) => setSubcategory_Name(e.target.value)}
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <input
              type="text"
              placeholder="Short Description"
              className="input input-bordered"
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="Number"
              placeholder="Price"
              className="input input-bordered"
              required
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Rating</span>
            </label>
            <input
              type="Number"
              placeholder="Rating"
              className="input input-bordered"
              required
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <input
              type="Number"
              placeholder="Customization"
              className="input input-bordered"
              required
              value={customization}
              onChange={(e) => setCustomization(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="Number"
              placeholder="Processing Time"
              className="input input-bordered"
              required
              value={processing_time}
              onChange={(e) => setProcessing_time(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Stock Status</span>
            </label>
            <input
              type="text"
              placeholder="Stock Status"
              className="input input-bordered"
              required
              value={stockStatus}
              onChange={(e) => setStockStatus(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Name</span>
            </label>
            <input
              type="text"
              placeholder="User Name"
              className="input input-bordered"
              required
              defaultValue={userName}
              disabled
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">User Email</span>
            </label>
            <input
              type="email"
              placeholder="User Email"
              className="input input-bordered"
              required
              defaultValue={userEmail}
              disabled
            />
          </div>
          <div className="form-control mt-6">
            <button type="submit" className="btn btn-primary">
              Add Now
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default CraftForm;
