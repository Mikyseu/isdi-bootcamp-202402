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

    return <>
     <main className='h-screen bg-[#6E8BB3]'>
        <Header onUserLoggedOut = {onLogout}/>
        <SongList />
        <Footer />
     </main>
       
    </>
    
}

export default Home