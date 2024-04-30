import { useLoaderData } from "react-router-dom";
import Card1 from "../../../components/Card1/Card1";

function ArtAndCraftCategory() {
  const data = useLoaderData();
  return (
    <div>
      <h1 className="text-4xl text-center font-bold py-7">
        ArtAndCraftCategory
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <Card1 key={item._id} data={item} />
        ))}
      </div>
    </div>
  );
}

export default ArtAndCraftCategory;
