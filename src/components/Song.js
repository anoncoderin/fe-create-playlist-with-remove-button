import sound from "../icons/sound.png";
import deleteIcon from "../icons/delete.png";

export default function Song(props) {
  const song = props.song;

  function handleDelete() {
    return props.remove(song);
  }

  function handleToggle() {
    props.toggleList(song);
  }
  return (
    <>
      <li className="song">
        <div className="song-details">
          <div>
            <img src={sound} alt="" />
          </div>
          <div>
            <p>
              <span>
                {song.played ? <del>{song.title}</del> : song.title}
                <input
                  type="checkbox"
                  onChange={handleToggle}
                  value={song.played}
                />
              </span>
            </p>
            <p>
              <span>{song.artist}</span>
            </p>
          </div>
        </div>
        <div onClick={handleDelete}>
          <img src={deleteIcon} alt="delete" />
        </div>
      </li>
    </>
  );
}
