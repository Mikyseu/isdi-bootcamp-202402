import React, { useEffect, useState } from 'react';
import logic from '../logic';

function SongList ({}) {
    const [songs, setSongs] = useState(null)

    useEffect(() => {
        try {
            logic.retrieveSongs()
                .then(setSongs)
                .catch(error => console.log(error))
        } catch (error) {
            console.log(error)
        }
    }, [])

    return <ul>{songs && songs.map(song => (
        <li key={song._id}>
        {song.title}
        </li>
        ))}</ul>
};

export default SongList;