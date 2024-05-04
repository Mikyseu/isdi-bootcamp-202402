import React, { useState, useEffect } from 'react';
import logic from '../logic';

function SongList({ currentSong, userFavorites, playList }) {
  const [songs, setSongs] = useState([]);
  const [filteredSongs, setFilteredSongs] = useState([]);
  const [addFav, setAddFav] = useState(null);
  const [songFavId, setSongFavId] = useState('');
  const [runEffect, setRunEffect] = useState(false);

  useEffect(() => {
    try {
      logic
        .retrieveSongs(userFavorites)
        .then(allSongs => {
          console.log(allSongs);
          const formattedSongs = allSongs.map(song => ({
            id: song._id,
            title: song.title,
            song: `https://cdn1.suno.ai/${song.sunoId}.mp3`,
            image: `https://cdn1.suno.ai/image_${song.sunoId}.png`,
            favorite: song.favorite,
          }));
          setSongs(formattedSongs);
          setFilteredSongs(formattedSongs);
          playList(formattedSongs);
        })
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, []);

  //mirar el fallo
  useEffect(() => {
    try {
      if (addFav) {
        logic.addFavorite(songFavId);
      } else {
        logic.removeFavorite(songFavId);
      }
    } catch (error) {
      console.log(error);
    }
  }, [runEffect]);

  const handleSelectedSong = song => {
    currentSong(song);
  };

  const handleSearch = searchTerm => {
    const filtered = songs.filter(song =>
      song.title.toLowerCase().includes(searchTerm.toLowerCase()),
    );
    setFilteredSongs(filtered);
  };

  const handlePlayFirstSong = () => {
    if (filteredSongs.length > 0) {
      handleSelectedSong(filteredSongs[0]);
    }
  };

  const handleFav = id => {
    setSongFavId(id);
    setRunEffect(!runEffect);

    const updatedSongs = filteredSongs.map(song => {
      if (song.id === id) {
        setAddFav(!song.favorite);

        return { ...song, favorite: !song.favorite };
      } else {
        return song;
      }
    });
    setFilteredSongs(updatedSongs);
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
        {filteredSongs.map(song => (
          <li key={song.id}>
            <a
              href="#"
              onClick={() => handleSelectedSong(song)}
              className="text-white font-semibold flex justify-between items-center mr-4"
            >
              <span>{song.title}</span>
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
        ))}
      </ul>
    </div>
  );
}

export default SongList;
