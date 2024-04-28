import { useLoaderData } from "react-router-dom";

function CraftItems() {
  const data = useLoaderData();

  return (
    <div className="container mx-auto px-4">
      <h1>All Craft items page </h1>
      {data.map((item) => (
        <h1 className="border py-2" key={item._id}>
          {item.userObj.userEmail}
        </h1>
      ))}
    </div>
  );
}

export default CraftItems;
