import { Music } from "../../../types/types";
import musicCardStyle from "./style";
import { BsFillPlayFill } from "../../../assets/icons";

const MusicCard = ({ music }: { music: Music }) => {
  return (
    <div className={musicCardStyle.card}>
      <img
        className={musicCardStyle.cardImg}
        src={music.cover}
        alt={music.title}
      />
      <button className={musicCardStyle.cardButton}>
        <BsFillPlayFill />
      </button>
      <div className={musicCardStyle.cardBody}>
        <p className={musicCardStyle.cardLabel}>New Music</p>
        <h2 className={musicCardStyle.cardTitle}>{music.title}</h2>
        <h3 className={"musicCardStyle.cardText"}>{music.artist.name}</h3>
      </div>
    </div>
  );
};

export default MusicCard;
