import React, { useEffect, useState } from 'react';
import logic from '../logic';
import { Link } from 'react-router-dom';
import { useParams } from 'react-router-dom';

function Header({ onUserLoggedOut, stamp }) {
  const params = useParams();
  console.log(params);

  const [user, setUser] = useState(null);

  const handleLogoutClick = () => {
    try {
      logic.logoutUser();
    } catch (error) {
      logic.cleanUpLoggedInUserId();
    } finally {
      onUserLoggedOut();
    }
  };

  useEffect(() => {
    try {
      logic
        .retrieveUser()
        .then(setUser)
        .catch(error => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }, [stamp]);
  console.log(params.username);
  return (
    <header className="flex items-center bg-[#1B1F47] p-2 ">
      <Link to={`/profile/:username`}>
        {user && user.avatar ? (
          <img
            src={user.avatar}
            alt="profile pic"
            className="w-16 h-16 rounded-full object-cover mr-4"
          />
        ) : (
          <img
            className="w-16 h-16 rounded-full object-cover mr-2"
            src="/Avatarsimbol.png"
            alt="profile pic"
          />
        )}
      </Link>

      <div className="flex flex-col">
        {user && (
          <h1 className="text-white font-bold text-lg">{user.username}</h1>
        )}
        {user && <p className="text-white text-lg font-light">{user.email}</p>}
      </div>

      <button className="ml-auto mr-1 " onClick={handleLogoutClick}>
        <img
          src="../../public/logoutIcon.png"
          alt="menu"
          className="w-8 h-8 "
        />
      </button>
    </header>
  );
}

export default Header;
