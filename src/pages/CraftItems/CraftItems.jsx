import { useLoaderData } from "react-router-dom";
import Card from "../../components/Card/Card";

function CraftItems() {
  const data = useLoaderData();

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold py-7">All Craft items page </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item) => (
          <Card data={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default CraftItems;
