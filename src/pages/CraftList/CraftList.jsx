/* eslint-disable react-hooks/exhaustive-deps */
import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { AuthContext } from "../../contextApi/AuthProvider";

function CraftList() {
  const { user } = useContext(AuthContext);
  const data = useLoaderData();
  const [items, setItems] = useState([]);

  useEffect(() => {
    const filteredItems = data.filter(
      (item) =>
        item.userObj.userEmail === user.email &&
        item.userObj.userName === user.displayName
    );
    setItems(...items, filteredItems);
  }, [data, user.email]);

  return (
    <div className="container mx-auto px-4">
      <h1>Craft List page: {items.length}</h1>
      {items.map((item) => (
        <h1 className="border py-2 my-2" key={item._id}>
          {item.userObj.userName}
        </h1>
      ))}
    </div>
  );
}

export default CraftList;
