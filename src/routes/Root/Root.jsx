import { Outlet } from "react-router-dom";

function Root() {
  return (
    <div>
      <h1 className="text-3xl">This is Root Router</h1>
      <Outlet />
    </div>
  );
}

export default Root;
