import { MusicCard } from "../../components";
import { dummyMusics } from "../../constants/dummyData";
const HomePage = () => {
  return (
    <div>
      <h1>Home Page</h1>
      <p>This is the home page</p>
      <div className="grid grid-4">
        {dummyMusics.map((music) => (
          <MusicCard key={music.id} music={music} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
