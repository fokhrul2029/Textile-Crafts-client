import { useLoaderData } from "react-router-dom";
import DetailsCard from "../../components/DetailsCard/DetailsCard";

function Details() {
  const data = useLoaderData();

  return (
    <div className="container mx-auto px-4">
      {data.map((item) => (
        <DetailsCard key={data._id} data={item} />
      ))}
    </div>
  );
}

export default Details;
