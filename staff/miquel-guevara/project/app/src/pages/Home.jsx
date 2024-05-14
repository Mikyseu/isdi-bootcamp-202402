import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import SongList from '../components/SongList';
import Footer from '../components/Footer';
import Profile from '../components/Profile';
import { Routes, Route } from 'react-router-dom';
import { useContext } from '../context';

function Home({ onUserLoggedOut }) {
  const [currentSong, setCurrentSong] = useState(null);
  const [selectedSongIndex, setSelectedSongIndex] = useState(-1);
  const [songsList, setSongsList] = useState(null);
  const changeCurrentSong = selectedSong => {
    setCurrentSong(selectedSong);
  };
  const { stamp, setStamp } = useContext();

  const handleSongsListChange = songsList => {
    setSongsList(songsList);
  };

  const handleSongSelected = (selectedSongIndex, songsList) => {
    setSelectedSongIndex(selectedSongIndex);
    setSongsList(songsList);
  };

  // const getSongList = (userFavorites) => {
  //   try {
  //         logic
  //           .retrieveSongs(userFavorites)
  //           .then(songs => {
  //             setSongs(songs);
  //             setFilteredSongs(songs);
  //           })
  //           .catch(error => showFeedback(error));
  //       } catch (error) {
  //         showFeedback(error);
  //       }
  // }

  // useEffect(() => {}, [stamp]);

  // useEffect(() => {
  //   try {
  //     logic
  //       .retrieveSongs(userFavorites)
  //       .then(songs => {
  //         setSongs(songs);
  //         setFilteredSongs(songs);
  //       })
  //       .catch(error => showFeedback(error));
  //   } catch (error) {
  //     showFeedback(error);
  //   }
  // }, [userFavorites, favChanged]);

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
                songsList={handleSongsListChange}
                onSongSelected={handleSongSelected}
                stamp={stamp}
                setStamp={setStamp}
              />
            }
          />
          <Route
            path="/profile"
            element={
              <Profile
                currentSong={changeCurrentSong}
                songsList={songsList}
                onSongSelected={handleSongSelected}
                stamp={stamp}
                setStamp={setStamp}
              />
            }
          />
        </Routes>

        <Footer
          song={currentSong}
          songsList={songsList}
          songIndex={selectedSongIndex}
        />
      </main>
    </>
  );
}

export default Home;
