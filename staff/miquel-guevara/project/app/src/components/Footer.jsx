import React, { useRef, useState, useEffect } from 'react';

function Footer({ song, onSongComplete, songsList }) {
  // console.log({ song, onSongComplete, songsList });
  const [playing, setPlaying] = useState(false);
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [songToPlay, setSongToPlay] = useState(song);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const handleLoadedMetadata = () => {
      setDuration(audio.duration);
    };

    const handleTimeUpdate = () => {
      setCurrentTime(audio.currentTime);
    };

    const handleEnded = () => {
      onSongComplete();
      setPlaying(false);
    };

    audio.addEventListener('loadedmetadata', handleLoadedMetadata);
    audio.addEventListener('timeupdate', handleTimeUpdate);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('loadedmetadata', handleLoadedMetadata);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
      audio.removeEventListener('ended', handleEnded);
    };
  }, [audioRef.current, onSongComplete]);

  useEffect(() => {
    console.log('SongToPLay1:', songToPlay);
    console.log('song:', song);
    if (song) {
      setSongToPlay(song);
    }
    if (songToPlay) {
      audioRef.current.load();

      setPlaying(true);
    }
  }, [song]);

  const skipBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  const handlePlay = () => {
    const audio = audioRef.current;
    console.log('AudioRef:', audioRef.current);
    if (audio.paused) {
      audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  const skipForward = () => {
    audioRef.current.currentTime += 10;
  };

  const handleNextSong = () => {
    console.log('SongToPLay:', songToPlay);
    const songIndex = songsList.indexOf(songToPlay);

    console.log('SongIndex:', songIndex);
    if (songIndex >= 0 && songIndex < songsList.length - 1) {
      setSongToPlay(songsList[songIndex + 1]);
    }
  };

  const handlePreviousSong = () => {
    const songIndex = songsList.indexOf(songToPlay);
    if (songIndex > 0) {
      setSongToPlay(songsList[songIndex - 1]);
    }
  };
  // console.log('songToPlay:', songToPlay);
  // console.log('playing:', playing);

  return (
    <div className="fixed bottom-0 w-full h-[140px] flex justify-center items-center p-4 box-border bg-[#1B1F47] ">
      {songToPlay && (
        <div className="flex flex-col items-start">
          <img src={songToPlay.image} className="w-20 h-20 " alt="Image song" />
        </div>
      )}
      <div className="flex flex-col items-start ml-4 ">
        {songToPlay && (
          <>
            <p className="font-bold text-white text-center">
              {songToPlay.title}
            </p>
            <audio ref={audioRef} src={songToPlay.song} autoPlay={playing} />
            <div className="relative w-[180px] h-2 bg-[#ffffff] rounded-full mt-4">
              <div
                className="absolute h-full bg-[#6E8BB3] rounded-full"
                style={{ width: `${(currentTime / duration) * 100}%` }}
              />
            </div>
            <div className="flex justify-between w-full mt-2">
              <p className="text-white font-semibold">
                {formatTime(currentTime)}
              </p>
              <p className="text-white font-semibold">{formatTime(duration)}</p>
            </div>
          </>
        )}
        <div className="flex w-full justify-between mt-2">
          <button onClick={handlePreviousSong}>
            <img
              src="../public/backward.png"
              alt="previous"
              className="w-4 h-4"
            />
          </button>
          <button onClick={skipBackward}>
            <img
              src="../public/rewind-left.png"
              alt="backward"
              className="w-4 h-4"
            />
          </button>
          <button onClick={handlePlay}>
            {playing ? (
              <img src="../public/pause.png" alt="pause" className="w-5 h-5" />
            ) : (
              <img src="../public/play.png" alt="play" className="w-5 h-5 " />
            )}
          </button>
          <button onClick={skipForward}>
            <img
              src="../public/rewind-right.png"
              alt="next"
              className="w-4 h-4"
            />
          </button>
          <button onClick={handleNextSong}>
            <img src="../public/next.png" alt="next" className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}

function formatTime(time) {
  const minutes = Math.floor(time / 60);
  const seconds = Math.floor(time % 60);
  return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
}

export default Footer;
