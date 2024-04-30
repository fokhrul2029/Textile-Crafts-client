import { useContext, useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contextApi/AuthProvider";
import Card3 from "../../components/Card3/Card3";
import swal from "sweetalert";

function CraftList() {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [items, setItems] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const filteredItems = data.filter(
      (item) =>
        item.userObj.userEmail === user.email &&
        item.userObj.userName === user.displayName
    );
    setItems(filteredItems);
  }, [data, user.email, user.displayName]);

  const sortByCustomization = (option) => {
    console.log("Sorting option:", option);
    const sortedData = [...items].sort((a, b) => {
      console.log("Sorting items:", a, b);
      if (option === "yes") {
        return a.customization === "yes" ? -1 : 1;
      } else if (option === "no") {
        return a.customization === "no" ? -1 : 1;
      } else {
        return 0;
      }
    });
    console.log("Sorted data:", sortedData);
    setItems(sortedData);
  };

  const handleUpdate = (id) => {
    navigate(`/update/${id}`);
  };

  const handleDelete = (id) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this imaginary file!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        fetch(`https://backend-md-fokhrul-islams-projects.vercel.app/categories-data/${id}`, {
          method: "DELETE",
        })
          .then()
          .catch(() => {
            swal({
              title: "Request Failed!",
              text: "Failed to delete data!",
              icon: "warning",
            });
          });
        swal("Poof! Your imaginary file has been deleted!", {
          icon: "success",
        });
      } else {
        swal("Your imaginary file is safe!");
      }
    });
  };

  return (
    <div className="container mx-auto px-4">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">Craft List page: {items.length}</h1>
        <div className="relative">
          <select
            className="block appearance-none w-full bg-white border border-gray-300 hover:border-gray-400 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:border-gray-500"
            onChange={(e) => sortByCustomization(e.target.value)}
          >
            <option value="">Sort by Customization</option>
            <option value="yes">Yes</option>
            <option value="no">No</option>
          </select>
        </div>
      </div>

      {items.map((item) => (
        <Card3
          key={item._id}
          data={item}
          onUpdate={() => handleUpdate(item._id)}
          onDelete={() => handleDelete(item._id)}
        />
      ))}
    </div>
  );
}

export default CraftList;
