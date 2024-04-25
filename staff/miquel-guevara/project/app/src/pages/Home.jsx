import { logger } from '../utils'

import logic from '../logic'

import { useState, useEffect } from 'react'

import { Routes, Route } from 'react-router-dom'
// import Profile from '../components/Profile'

import { useContext } from '../context'

function Home({ onUserLoggedOut }) {
    const [user, setUser] = useState(null)

    const handleLogoutClick = () => {
        try {
            logic.logoutUser()
        } catch (error) {
            logic.cleanUpLoggedInUserId()
        } finally {
            onUserLoggedOut()
        }
    }

    useEffect(() => {
        try {
            logic.retrieveUser()
                .then(setUser)
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    }, [])

    return (
        <main className="h-screen bg-[#6E8BB3]">
        <header >
        
            <div className="flex items-center bg-[#1B1F47] ">

                <button>{user && user.avatar ? <img src={user.avatar} alt="profile pic" className="w-20 h-20 rounded-full mr-4"></img> : <img className="w-20 h-20 rounded-full mr-2"  src="../../public/Avatarsimbol.png" alt="profile pic"></img>}</button>
                
                <div className="flex flex-col">
                {user && <h1 className="text-white font-bold text-lg">{user.name}</h1>}
                {user && <p className="text-white text-lg font-light">{user.email}</p>}
                </div>

                <button className="ml-auto pr-2" onClick={handleLogoutClick} > <img src="../../public/logoutIcon.png" alt="menu" className="w-8 h-8 " /></button>

            </div>
            
        </header>
        </main>
    )
}

export default Home