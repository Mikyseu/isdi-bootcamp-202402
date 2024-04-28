function createSong(song) {
    const json = JSON.stringify(song);

    return fetch(`${import.meta.env.VITE_API_URL}/song`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: json
    })
        .then(res => {
            if (res.status === 200)
                return res.json();
            else
                throw new Error('Error creating song');
        });
}

export default createSong;
