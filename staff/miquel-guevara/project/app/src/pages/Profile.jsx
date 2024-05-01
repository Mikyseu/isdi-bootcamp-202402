import Header from '../components/Header';
import SongList from '../components/SongList';
import Footer from '../components/Footer';

import { useState, useEffect } from 'react';
import logic from '../logic';
import { Link } from 'react-router-dom';

function Profile({ onUserLoggedOut }) {
  const onLogout = () => onUserLoggedOut();
  const [user, setUser] = useState(null);
  const [currentSong, setCurrentSong] = useState(null);

  useEffect(() => {
    try {
      logic
        .retrieveUser()
        .then(setUser)
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, []);

  return (
    <>
      <main className="h-screen bg-[#6E8BB3]">
        <Header onUserLoggedOut={onLogout} />
        <div className="flex justify-between items-center">
          <Link to="/">
            <img
              src="../../public/home.png"
              className="w-8 h-8 my-4 mx-4"
              alt="Home"
            />
          </Link>

          <div className="flex items-center">
            {user?.avatar ? (
              <img
                src={user.avatar}
                alt="profile pic"
                className="w-20 h-20 rounded-full mr-4"
              />
            ) : (
              <img
                className="w-20 h-20 rounded-full mr-2"
                src="../../public/Avatarsimbol.png"
                alt="profile pic"
              />
            )}

            {user && (
              <h1 className="text-white font-bold text-lg">{user.name}</h1>
            )}
          </div>

          <Link to="/createSong">
            <button className="ml-auto">
              <img
                src="../../public/addMusic.png"
                alt="addMusic"
                className="w-8 h-8 my-4 mx-4"
              />
            </button>
          </Link>
        </div>

        <Footer song={currentSong} />
      </main>
    </>
  );
}

export default Profile;
