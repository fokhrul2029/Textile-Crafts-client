import { useLoaderData, useNavigate } from "react-router-dom";

function CraftItems() {
  const data = useLoaderData();
  const navigate = useNavigate();

  const handleButton = (id) => {
    navigate(`/details/${id}`);
  };

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold py-7">All Craft items page </h1>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr className="bg-green-100 font-bold">
              <th></th>
              <th>Title</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item, i) => (
              <tr key={item._id} className="bg-base-200">
                <th>{i + 1}</th>
                <td>{item.item_name}</td>
                <td>{item.subcategory_Name}</td>
                <td>${item.price}</td>
                <td>
                  <button
                    onClick={() => handleButton(item._id)}
                    className="link"
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default CraftItems;
