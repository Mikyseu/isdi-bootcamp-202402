import React, { useState } from 'react';
import Header from '../components/Header';
import SongList from '../components/SongList';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import { Routes, Route } from 'react-router-dom';

function Home({ onUserLoggedOut }) {
  const [currentSong, setCurrentSong] = useState(null);
  const [playList, setPlayList] = useState(null);
  const changeCurrentSong = selectedSong => {
    setCurrentSong(selectedSong);
  };
  const [stamp, setStamp] = useState(null);

  //una vez actualice el profile la foto tendria que setear el estado con un new date

  const handlePlayListChange = playList => {
    setPlayList(playList);
  };

  return (
    <>
      <main className="min-h-screen bg-[#6E8BB3]">
        <Header onUserLoggedOut={onUserLoggedOut} stamp={stamp} />
        <Routes>
          <Route
            path="/"
            element={
              <SongList
                currentSong={changeCurrentSong}
                playList={handlePlayListChange}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile currentSong={changeCurrentSong} playList={playList} />
            }
          />
        </Routes>

        <Footer song={currentSong} playList={playList} />
      </main>
    </>
  );
}

export default Home;
