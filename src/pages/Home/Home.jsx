 
import ArtAndCraftCategory from "../shared/ArtAndCraftCategory/ArtAndCraftCategory";
import Banner from "../shared/Banner/Banner";
import CraftSection from "../shared/CraftSection/CraftSection";

function Home() {
  return (
    <div className="container mx-auto px-4">
      <Banner /> 
      <CraftSection />
      <ArtAndCraftCategory />
    </div>
  );
}

export default Home;
