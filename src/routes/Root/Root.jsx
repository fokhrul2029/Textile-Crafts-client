import { Outlet } from "react-router-dom";
import Navbar from "../../pages/shared/Navbar/Navbar";
import Footer from "../../pages/shared/Footer/Footer";

function Root() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Root;
