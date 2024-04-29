
import Loader from "../../components/Loader/Loader";
import Banner from "../shared/Banner/Banner";

function Home() {

  return (
    <div className="container mx-auto px-4">
      <Banner />
      <h1 className="text-3xl">This is Home page</h1>
      <Loader />
    </div>
  );
}

export default Home;
