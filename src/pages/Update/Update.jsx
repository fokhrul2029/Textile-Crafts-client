import { useLoaderData } from "react-router-dom";
import UpdateForm from "../shared/UpdateForm/UpdateForm";

function Update() {
  const data = useLoaderData();
  console.log(data);
  return (
    <div className="container mx-auto px-4">
      {data.map((item) => (
        <UpdateForm key={item._id} data={item} />
      ))}
    </div>
  );
}

export default Update;
