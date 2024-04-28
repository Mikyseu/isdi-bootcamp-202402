import React, { useState, useEffect } from 'react';
import logic from '../logic';

function SongList({ currentSong }) {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);

  useEffect(() => {
    try {
      logic.retrieveSongs()
        .then(setSongs)
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, []);

  const handleSelectedSong = (song) => {
    console.log(song);
    currentSong(song);
  };

  const handleSearch = (searchTerm) => {
    const filtered = songs.filter(song =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredSongs(filtered);
  };

  return (
    <div className="max-h-[70vh] overflow-y-auto">
      <div className="relative">
        <input
          type="text"
          placeholder="Search song..."
          onChange={(e) => handleSearch(e.target.value)}
          className="px-4 py-2 border rounded-md pr-10" 
        />
        <div className="absolute top-0 right-0 mt-2 mr-2">
          <img src="../../public/lupa.png" alt="Search" className="w-4 h-4" />
        </div>
      </div>

      <ul>
        {filteredSongs.length > 0 ? (
          filteredSongs.map(song => (
            <li key={song._id}>
              <a href="#" onClick={() => handleSelectedSong(song)} className="text-white font-semibold">
                {song.title}
              </a>
            </li>
          ))
        ) : (
          songs.map(song => (
            <li key={song._id}>
              <a href="#" onClick={() => handleSelectedSong(song)} className="text-white font-semibold">
                {song.title}
              </a>
            </li>
          ))
        )}
      </ul>
    </div>
  );
}

export default SongList;
