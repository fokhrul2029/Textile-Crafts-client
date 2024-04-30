import { useContext, useState } from "react";
import { AuthContext } from "../../../contextApi/AuthProvider";
import { FaStar } from "react-icons/fa";
import swal from "sweetalert";

function CraftForm() {
  const { user } = useContext(AuthContext);

  const [image, setImage] = useState(null);
  const [item_name, setItem_name] = useState(null);
  const [subcategory_Name, setSubcategory_Name] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [rating, setRating] = useState(0);
  const [customization, setCustomization] = useState(null);
  const [processing_time, setProcessing_time] = useState("5-8 Business days");
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
    fetch("https://backend-md-fokhrul-islams-projects.vercel.app/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    })
      .then(() => {
        swal({
          title: "Good job!",
          text: "You have successfully added!",
          icon: "success",
        });
      })
      .catch(() => {
        swal({
          title: "Failed!",
          text: "Something went wrong!",
          icon: "warning",
        });
      });
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
            <select
              className="input input-bordered"
              value={subcategory_Name}
              onChange={(e) => setSubcategory_Name(e.target.value)}
              required
            >
              <option className="text-gray-400" value="" disabled selected>
                Select an option
              </option>
              <option value="Embroidery">Embroidery</option>
              <option value="Knitting & Crocheting">
                Knitting & Crocheting
              </option>
              <option value="Quilting">Quilting</option>
              <option value="Beadwork">Beadwork</option>
              <option value="Tie-Dyeing">Tie-Dyeing</option>
              <option value="Macrame">Macrame</option>
            </select>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Short Description</span>
            </label>
            <textarea
              required
              rows="4"
              placeholder="Short Description"
              className="textarea textarea-bordered"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
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
              <span className="label-text">
                <div className="flex items-center gap-1">
                  <p>Rating</p>(
                  <span className="flex gap-1 items-center">
                    <FaStar className="text-yellow-500" /> <p>{rating}</p>
                  </span>
                  )
                </div>
              </span>
            </label>
            <input
              type="range"
              placeholder="Rating"
              className="range range-success"
              required
              min={0}
              max={5}
              value={rating}
              onChange={(e) => setRating(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Customization</span>
            </label>
            <select
              className="input input-bordered"
              value={customization}
              onChange={(e) => setCustomization(e.target.value)}
              required
            >
              <option className="text-gray-400" value="" disabled selected>
                Select an option
              </option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Processing Time</span>
            </label>
            <input
              type="text"
              placeholder="5-8 Business days"
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
            <select
              className="input input-bordered"
              value={stockStatus}
              onChange={(e) => setStockStatus(e.target.value)}
              required
            >
              <option className="text-gray-400" value="" disabled selected>
                Select an option
              </option>
              <option value="In stock">In stock</option>
              <option value="Made to Order">Made to Order</option>
            </select>
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
