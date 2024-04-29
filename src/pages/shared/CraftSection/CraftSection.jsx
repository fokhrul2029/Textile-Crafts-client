import { useLoaderData } from "react-router-dom";
import Card from "../../../components/Card/Card";

function CraftSection() {
  const data = useLoaderData();
  return (
    <div className="py-10">
      <h1 className="text-center text-4xl font-bold py-6">Craft Items</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {data.map((item) => (
          <Card data={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default CraftSection;
