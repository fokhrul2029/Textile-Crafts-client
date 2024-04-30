import { useLoaderData } from "react-router-dom";
import DetailsCard from "../../components/DetailsCard/DetailsCard";

function CategoryDetails() {
  const data = useLoaderData();
  return (
    <div className="container mx-auto px-4">
      {data.map((item) => (
        <DetailsCard key={item._id} data={item} />
      ))}
    </div>
  );
}

export default CategoryDetails;
