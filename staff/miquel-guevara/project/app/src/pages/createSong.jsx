import createSong from '../logic/createSong.js'

function CreateSongComponent ({}) {
    
    const GetImageFromUri = (uri) => {
        const domain = uri.substring(0, uri.lastIndexOf('/') + 1);
        const songFileName = uri.substring(uri.lastIndexOf('/') + 1);
        const songId = songFileName.replace('mp3', 'png');
        return domain + "image_" + songId;
    }

    const GetMp3FromUri = (uri) => {
        return uri + ".mp3";
    }

    const handleCreatedSongClick = event => {
        event.preventDefault()

        const form = event.target
        const userId = form.userId.value
        const title = form.title.value
        const song = form.song.value

        try {
            const mp3Url = GetMp3FromUri(song)
            const imageUrl = GetImageFromUri(mp3Url)

            createSong({ userId: userId, image: imageUrl, title: title, song: mp3Url })
                .then(() => {
                    console.log('fantastic')
                })
                .catch(error => {
                    console.log(error)
                });
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <main className="flex justify-center items-center h-screen bg-[#1B1F47]">
            <div>
                <form onSubmit={handleCreatedSongClick} className="flex flex-col items-center mt-8">   
                    <div className="flex flex-col mb-4">
                        <label htmlFor="image" className="text-white mb-1">image</label>
                        <input id="image" className="rounded-lg px-2 py-1" />
                    </div>
                    
                    <div className="flex flex-col mb-4">
                        <label htmlFor="title" className="text-white mb-1">title</label>
                        <input id="title" className="rounded-lg px-2 py-1" />
                    </div>
                   
                    <div className="flex flex-col mb-4">
                        <label htmlFor="song" className="text-white mb-1">song</label>
                        <input id="song" className="rounded-lg px-2 py-1" />
                    </div>
    
                    <button className="bg-[#4C5D8B] hover:bg-[#6B99C3] text-white font-bold py-2 px-4 rounded mt-4" type="submit">Create Song</button>
                </form>
            </div>
        </main>
    );
}

export default CreateSongComponent;
