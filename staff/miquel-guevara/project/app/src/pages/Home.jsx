import { logger } from '../utils'

import logic from '../logic'

import { useState, useEffect } from 'react'
import { useContext } from '../context'

import { Routes, Route } from 'react-router-dom'
import Header from '../components/Header'
import SongList from '../components/SongList'
import Footer from '../components/Footer'

function Home({ onUserLoggedOut }) {
    const onLogout = () => onUserLoggedOut()

    const [currentSong, setCurrentSong] = useState({ image: 'https://cdn1.suno.ai/image_4815c59a-56ad-4870-92c2-8a4713d8da88.png', title: 'Marching to Success', songUrl: 'https://cdn1.suno.ai/4815c59a-56ad-4870-92c2-8a4713d8da88.mp3' }) 
    // const currentSong = { image: 'https://cdn1.suno.ai/image_4815c59a-56ad-4870-92c2-8a4713d8da88.png', title: 'Marching to Success', songUrl: 'https://cdn1.suno.ai/4815c59a-56ad-4870-92c2-8a4713d8da88.mp3' }

    const changeCurrentSong = (selectedSong) => {

        setCurrentSong(selectedSong);
    }

    return <>
     <main className='h-screen bg-[#6E8BB3]'>
        <Header onUserLoggedOut = {onLogout}/>
        <SongList currentSong={changeCurrentSong} />
        <Footer song = {currentSong} />
     </main>
       
    </>
    
}

export default Home