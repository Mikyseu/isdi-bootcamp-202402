import React, { useState, useEffect } from 'react';
import logic from '../logic';

function SongList({ currentSong }) {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    try {
      logic.retrieveSongs()
        .then(allSongs => {
          const formattedSongs = allSongs.map(song => ({
            id: song._id,
            title: song.title,
            song: `https://cdn1.suno.ai/${song.sunoId}.mp3`,
            image: `https://cdn1.suno.ai/image_${song.sunoId}.png`,
            favorite: false
          }));
          setSongs(formattedSongs);
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSelectedSong = (song) => {
    currentSong(song);
  };

  const handleSearch = (searchTerm) => {
    const filtered = songs.filter(song =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSongs(filtered);
  };

  const handlePlayFirstSong = () => {
    if (songs.length > 0) {
      handleSelectedSong(songs[0]);
    }
  };

  const handleFav = (id) => {
    const updatedSongs = songs.map(song =>
      song.id === id ? { ...song, favorite: !song.favorite } : song
    );
    setSongs(updatedSongs);
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 md:px-0"> 
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search song..."
          onChange={(e) => handleSearch(e.target.value)}
          className="px-4 py-2 rounded-md pr-10 w-full mt-4"
        />
        <button
          onClick={handlePlayFirstSong}
          className="ml-2 px-2 py-2 mt-4 w-[120px] bg-[#1B1F47] text-white font-bold rounded-md"
        >
          Play List
        </button>
      </div>

      <ul className="max-h-[calc(100vh - 140px)] overflow-y-auto mt-4"> 
        {filteredSongs.length > 0 ? (
          filteredSongs.map(song => (
            <li key={song.id}>
              <a href="#" onClick={() => handleSelectedSong(song)} className="text-white font-semibold">
                {song.title}
              </a>
            </li>
          ))
        ) : (
          songs.map(song => (
            <li key={song.id}>
              <a href="#" onClick={() => handleSelectedSong(song)} className="text-white font-semibold flex justify-between items-center mr-4">
                <span>{song.title}</span>
                <button onClick={() => handleFav(song.id)}>
                  <img
                    src={song.favorite ? "../public/heart.png" : "../public/heart-empty.png"}
                    alt="fav"
                    className="w-5 h-5"
                  />
                </button>
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default SongList;
