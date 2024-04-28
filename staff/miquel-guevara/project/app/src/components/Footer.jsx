import React, { useRef, useState, useEffect } from 'react';

function Footer({ song, onPreviousSong, onNextSong, onSongComplete }) {
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleEnded = () => {
      onSongComplete();
      setPlaying(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioRef, onSongComplete]);

  useEffect(() => {
    if (song && song.songUrl) {
      audioRef.current.load();
      setPlaying(true);
    }
  }, [song]);

  const handleTimeUpdate = () => {
    setCurrentTime(audioRef.current.currentTime);
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  const handlePlay = () => {
    if (playing) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setPlaying(!playing);
  };

  const skipForward = () => {
    audioRef.current.currentTime += 10;
  };

  const handleNextSong = () => {
    onNextSong();
  };

  const handlePreviousSong = () => {
    onPreviousSong();
  };

  return (
    <div className="fixed bottom-0 w-full h-[140px] flex justify-center items-center p-4 box-border bg-[#1B1F47] ">
      {song && (
        <div className="flex flex-col items-start">
          <img src={song.image} className="w-20 h-20 " alt="Image song" />
        </div>
      )}
      <div className="flex flex-col items-start ml-4 ">
        {song && (
          <>
            <p className="font-bold text-white text-center">{song.title}</p>
            <audio
              ref={audioRef}
              src={song.songUrl}
              onTimeUpdate={handleTimeUpdate}
              autoPlay={playing}
            />
            <div className="relative w-[180px] h-2 bg-[#ffffff] rounded-full mt-4">
              <div
                className="absolute h-full bg-[#A5A5A5] rounded-full"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
            <div className="flex justify-between w-full mt-2">
              <p className="text-white font-semibold">{currentTime.toFixed(2)}</p>
              <p className="text-white font-semibold">{duration ? duration.toFixed(2) : '0.00'}</p>
            </div>
          </>
        )}
        <div className="flex w-full justify-between mt-2">
          <button onClick={handlePreviousSong}>
            <img src="../public/backward.png" alt="previous" className="w-4 h-4" />
          </button>
          <button onClick={skipBackward}>
            <img src="../public/rewind-left.png" alt="backward" className="w-4 h-4" />
          </button>
          <button onClick={handlePlay}>
            {playing ?
              <img src="../public/pause.png" alt="pause" className="w-5 h-5" />
              :
              <img src="../public/play.png" alt="play" className="w-5 h-5 " />
            }
          </button>
          <button onClick={skipForward}>
            <img src="../public/rewind-right.png" alt="next" className="w-4 h-4" />
          </button>
          <button onClick={handleNextSong}>
            <img src="../public/next.png" alt="next" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;
