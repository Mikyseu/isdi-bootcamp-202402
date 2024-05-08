import React, { useState, useEffect } from 'react';
import logic from '../logic';
import { useContext } from '../context.js';

function SongList({ currentSong, userFavorites, songsList }) {
  const { showFeedback } = useContext();

  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [favSongs, setFavSongs] = useState([]);
  const [songFavId, setSongFavId] = useState(null);
  const [favBoolean, setFavBoolean] = useState(false);

  useEffect(() => {
    try {
      logic
        .retrieveSongs(userFavorites)
        .then(allSongs => {
          const formattedSongs = allSongs.map(song => ({
            ...song,
            song: `https://cdn1.suno.ai/${song.sunoId}.mp3`,
            image: `https://cdn1.suno.ai/image_${song.sunoId}.png`,
          }));
          setSongs(formattedSongs);
          setFilteredSongs(formattedSongs);
        })
        .catch(error => showFeedback(error));
    } catch (error) {
      showFeedback(error);
    }
  }, [userFavorites]);

  useEffect(() => {
    try {
      if (favBoolean) {
        logic.addFavorite(songFavId);
      } else {
        logic.removeFavorite(songFavId);
      }
    } catch (error) {
      showFeedback(error);
    }
  }, [favBoolean, songFavId]);

  const handleSelectedSong = song => {
    currentSong(song);
  };

  const handleSearch = term => {
    setSearchTerm(term);
    const filtered = songs.filter(song =>
      song.title.toLowerCase().includes(term.toLowerCase()),
    );
    setFilteredSongs(filtered);
  };

  const handlePlayFirstSong = () => {
    if (filteredSongs.length > 0) {
      handleSelectedSong(filteredSongs[0]);
    }
  };

  const handleFav = id => {
    const isFavorite = !songs.find(song => song.id === id).favorite;
    setSongFavId(id);
    setFavBoolean(isFavorite);
    const updatedSongs = songs.map(song => {
      if (song.id === id) {
        return { ...song, favorite: isFavorite };
      } else {
        return song;
      }
    });
    setSongs(updatedSongs);
    setFavSongs(updatedSongs.filter(song => song.favorite));
    setFilteredSongs(
      updatedSongs.filter(song =>
        song.title.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    );
  };

  return (
    <div className="max-w-screen-lg mx-auto px-4 md:px-0">
      <div className="relative flex items-center">
        <input
          type="text"
          placeholder="Search song..."
          onChange={e => handleSearch(e.target.value)}
          className="px-4 py-2 rounded-md pr-10 w-full mt-4"
        />
        <button
          onClick={handlePlayFirstSong}
          className="ml-2 px-2 py-2 mt-4 w-[120px] bg-[#1B1F47] text-white font-bold rounded-md"
        >
          Play List
        </button>
      </div>

      <ul className="max-h-[calc(100vh - 280px)] overflow-y-auto mt-4">
        {filteredSongs.map(song => {
          return (
            <li key={song.id} className="flex justify-between items-center">
              <a
                href="#"
                onClick={e => {
                  e.preventDefault();
                  handleSelectedSong(song);
                }}
                className="text-white font-semibold"
              >
                {song.title}
              </a>
              <button onClick={() => handleFav(song.id)}>
                <img
                  src={
                    song.favorite
                      ? '../public/heart.png'
                      : '../public/heart-empty.png'
                  }
                  alt="fav"
                  className="w-5 h-5"
                />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default SongList;
