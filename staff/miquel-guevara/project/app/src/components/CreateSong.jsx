import React from 'react';
import logic from '../logic';
import { Link } from 'react-router-dom';

function CreateSongComponent({ onCancelClick }) {
  const handleCreateSongClick = event => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const song = form.song.value;

    try {
      // No se está utilizando userId o sunoId, ¿estás seguro de que los necesitas aquí?
      logic.createSong({ title, song }).then(() => {
        form.reset();
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <main className="h-screen flex justify-center items-center bg-black bg-opacity-40">
      <div className="bg-white p-8 rounded-lg">
        <Link to="/" className="absolute top-4 left-4">
          <img
            src="../../public/homeclear.png"
            className="w-8 h-8 "
            alt="Home"
          />
        </Link>

        <form
          onSubmit={handleCreateSongClick}
          className="flex flex-col items-center"
        >
          <div className="flex flex-col mb-4">
            <label htmlFor="title" className="text-white mb-1">
              Title
            </label>
            <input id="title" className="rounded-lg px-2 py-1" />
          </div>

          <div className="flex flex-col mb-4">
            <label htmlFor="song" className="text-white mb-1">
              Song
            </label>
            <input id="song" className="rounded-lg px-2 py-1" />
          </div>

          <button
            className="bg-[#4C5D8B] hover:bg-[#6B99C3] text-white font-bold py-2 px-4 rounded mt-4"
            type="submit"
          >
            Create Song
          </button>
          <button
            onClick={onCancelClick}
            className="bg-[#4C5D8B] hover:bg-[#6B99C3] text-white font-bold py-2 px-4 rounded mt-4"
            type="button"
          >
            Cancel
          </button>
        </form>
      </div>
    </main>
  );
}

export default CreateSongComponent;
