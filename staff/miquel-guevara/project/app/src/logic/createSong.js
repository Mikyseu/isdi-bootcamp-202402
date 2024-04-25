function createSong(song) {

    const json = JSON.stringify(song)

    return fetch(`${import.meta.env.VITE_API_URL}/song`, {
        method: 'POST',
        headers: {
            'Content-Types': 'application/json'
        },
        body: json
    })

        .then(res => {
            if (res.status === 200)
                console.log('canço creada')
        })

}

export default createSong