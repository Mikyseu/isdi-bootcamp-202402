import React from 'react';
import logic from '../logic';
import { useContext } from '../context.js';

function CreateSong({ onCancelClick }) {
  const { showFeedback } = useContext();

  const handleCreateSongClick = event => {
    event.preventDefault();

    const form = event.target;
    const title = form.title.value;
    const sunoId = form.sunoId.value;

    try {
      logic.createSong({ title, sunoId }).then(() => {
        form.reset();
      });
    } catch (error) {
      showFeedback(error);
    }
  };

  return (
    <main className="h-screen w-screen z-10 fixed top-0 left-0 flex justify-center items-center bg-black bg-opacity-40">
      <div className="bg-[#6E8BB3] p-4 rounded-lg">
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
            <label htmlFor="sunoId" className="text-white mb-1">
              SunoId
            </label>
            <input id="sunoId" className="rounded-lg px-2 py-1" />
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

export default CreateSong;
