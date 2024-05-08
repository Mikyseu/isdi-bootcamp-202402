import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import CreateSong from '../components/CreateSong';
import logic from '../logic';
import SongList from './SongList';
import { useContext } from '../context.js';

function Profile({ currentSong }) {
  const { showFeedback } = useContext();
  const [view, setView] = useState(null);
  const [user, setUser] = useState(null);
  const [changeAvatar, setChangeAvatar] = useState(false);
  const [songsList, setSongsList] = useState([]);

  useEffect(() => {
    async function fetchUserData() {
      try {
        const userData = await logic.retrieveUser();
        setUser(userData);
      } catch (error) {
        alert(error);
      }
    }
    fetchUserData();
  }, []);

  const clearView = () => setView(null);

  const handleAvatarChange = async event => {
    event.preventDefault();
    const avatar = event.target.avatarInput.value;
    try {
      await logic.updateUserAvatar(user.username, avatar);
      const updatedUserData = await logic.retrieveUser();
      setUser(updatedUserData);
    } catch (error) {
      showFeedback(error);
    }
  };

  const handleCreateSongClick = () => setView('create-song');

  const handleCancelCreateSongClick = () => clearView();

  const handleSongCreated = () => {
    clearView();
  };

  return (
    <section className="h-screen bg-[#6E8BB3] flex flex-col justify-start mt-4 mx-4">
      <div className="flex justify-between items-start">
        <Link to="/">
          <img src="../../public/home.png" alt="home" className="w-8 h-8" />
        </Link>

        <div className="mt-2 flex flex-col items-center">
          {user && (
            <img
              src={user.avatar ? user.avatar : '/Avatarsimbol.png'}
              alt="profile pic"
              className="w-20 h-20 rounded-full bg-white cursor-pointer"
              onClick={() => setChangeAvatar(!changeAvatar)}
            />
          )}

          {changeAvatar && (
            <form className="mt-4" onSubmit={handleAvatarChange}>
              <input
                id="avatarInput"
                type="url"
                className="p-1 rounded-md w-full"
              />
              <button
                type="submit"
                className="mt-4 w-full bg-[#1B1F47] text-white font-semibold p-2 rounded-md"
              >
                New avatar
              </button>
            </form>
          )}

          {user && (
            <h1 className="text-white font-bold text-xl mt-2">
              Hola, {user.username}
            </h1>
          )}
        </div>

        <button className="w-8 h-8" onClick={handleCreateSongClick}>
          <img src="../../public/addMusic.png" alt="add music" />
        </button>
      </div>

      <SongList
        userFavorites={true}
        currentSong={currentSong}
        songsList={songsList}
      />

      {view === 'create-song' && (
        <CreateSong
          onCancelClick={handleCancelCreateSongClick}
          onSongCreated={handleSongCreated}
        />
      )}
    </section>
  );
}

export default Profile;
