import { useState } from "react";
import Song from "./Song";
import SongForm from "./SongForm";

/*const initialSongs = [
  {
    id: 1,
    title: "Be the one",
    artist: "Dua Lipa",
    played: false
  },
  {
    id: 2,
    title: "Alejandro",
    artist: "Lady Gaga",
    played: false
  }
];*/

export default function Playlist() {
  const [songs, setSongs] = useState([] /*initialSongs*/);

  function addSong(song) {
    const updatedSong = [...songs, song];
    setSongs(updatedSong);
  }
  function deleteList(track) {
    const newList = songs.filter(function (song) {
      return song.id !== track.id;
    });
    setSongs(newList);
  }

  function toggleList(track) {
    const updatedToggledList = songs.map(function (song) {
      if (song.id === track.id) {
        song.played = !song.played;

        return song;
      } else {
        return song;
      }
    });
    setSongs(updatedToggledList);
  }
  return (
    <div>
      <ul>
        {songs.map((song) => (
          <Song
            key={song.id}
            song={song}
            remove={deleteList}
            toggleList={toggleList}
          />
        ))}
      </ul>
      <SongForm addSong={addSong} />
    </div>
  );
}
