import createSong from '../logic/createSong.js';

import { Link } from 'react-router-dom';

function CreateSongComponent({}) {
  const handleCreateSongClick = event => {
    event.preventDefault();

    const form = event.target;
    const userId = form.userId.value;
    const title = form.title.value;
    const song = form.song.value;

    try {
      createSong({
        userId: userId,
        image: imageUrl,
        title: title,
        song: mp3Url,
      })
        .then(() => {
          console.log('fantastic');
        })
        .catch(error => {
          console.log(error);
        });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="h-screen bg-[#1B1F47]">
      <Link to="/" className="mt-4 ml-4 inline-block">
        <img src="../../public/homeclear.png" className="w-8 h-8 " alt="Home" />
      </Link>

      <div className="flex justify-center items-center h-screen">
        <form
          onSubmit={handleCreateSongClick}
          className="flex flex-col items-center mb-9"
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="title" className="text-white mb-1">
              title
            </label>
            <input id="title" className="rounded-lg px-2 py-1" />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="song" className="text-white mb-1">
              song
            </label>
            <input id="song" className="rounded-lg px-2 py-1" />
          </div>

          <button
            className="bg-[#4C5D8B] hover:bg-[#6B99C3] text-white font-bold py-2 px-4 rounded mt-4"
            type="submit"
          >
            Create Song
          </button>
        </form>
      </div>
    </main>
  );
}

export default CreateSongComponent;
