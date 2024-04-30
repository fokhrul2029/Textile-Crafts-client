import { useEffect, useState } from "react";
import Card from "../../../components/Card/Card";

function CraftSection() {
  const [itemsData, setItemsData] = useState(null);

  useEffect(() => {
    fetch("https://backend-md-fokhrul-islams-projects.vercel.app/all-data/")
      .then((res) => res.json())
      .then((data) => setItemsData(data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <div className="py-10">
      <h1 className="text-center text-4xl font-bold py-6">Craft Items</h1>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {itemsData?.map((item) => (
          <Card data={item} key={item._id} />
        ))}
      </div>
    </div>
  );
}

export default CraftSection;
