import { useState } from "react";
import { nanoid } from "nanoid";

export default function SongForm(props) {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");

  function handleChangeTitle(e) {
    setTitle(e.target.value);
    console.log(title);
  }
  function handleChangleArtist(e) {
    setArtist(e.target.value);
  }
  function handleSumit(e) {
    e.preventDefault();
    const newSong = {
      title: title,
      artist: artist,
      id: nanoid(),
      played: false
    };
    props.addSong(newSong);
    //resets the form (empty the entered input)
    setTitle("");
    setArtist("");
  }
  return (
    <div className="edit">
      <h3>Add another song</h3>
      <form onSubmit={handleSumit}>
        <label>
          Song Title:{" "}
          <input type="text" onChange={handleChangeTitle} value={title} />
        </label>
        <label>
          Artist Name:{" "}
          <input type="text" onChange={handleChangleArtist} value={artist} />
        </label>
        <button type="submit">Add</button>
      </form>
    </div>
  );
}
