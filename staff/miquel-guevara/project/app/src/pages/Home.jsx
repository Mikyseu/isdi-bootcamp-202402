import React, { useState } from 'react';
import Header from '../components/Header';
import SongList from '../components/SongList';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import { Routes, Route } from 'react-router-dom';

function Home({ onUserLoggedOut }) {
  const [currentSong, setCurrentSong] = useState(null);

  const changeCurrentSong = selectedSong => {
    setCurrentSong(selectedSong);
  };
  const [stamp, setStamp] = useState(null);

  //una vez actualice el profile la foto tendria que setear el estado con un new date

  return (
    <>
      <main className="min-h-screen bg-[#6E8BB3]">
        {/* <SongList currentSong={changeCurrentSong} /> */}

        <Header onUserLoggedOut={onUserLoggedOut} stamp={stamp} />
        <Routes>
          <Route
            path="/"
            element={<SongList currentSong={changeCurrentSong} />}
          />
          <Route path="/profile/:username" element={<Profile />} />
        </Routes>

        <Footer song={currentSong} />
      </main>
    </>
  );
}

export default Home;
