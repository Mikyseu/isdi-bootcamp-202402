import React, { useRef, useState } from 'react';

function SongPlayer() {
  const audioRef = useRef(null);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const handleTimeUpdate = () => {
    const currentTime = audioRef.current.currentTime;
    const duration = audioRef.current.duration;
    setCurrentTime(currentTime);
    setDuration(duration);
  };

  const skipBackward = () => {
    audioRef.current.currentTime -= 10;
  };

  const handlePlay = () => {
    audioRef.current.play();
  };

  const handlePause = () => {
    audioRef.current.pause();
  };

  const skipForward = () => {
    audioRef.current.currentTime += 10;
  };

  return (
    <div className="flex bottom-0 items-center justify-center bg-[#1B1F47] p-4">
  <div className="flex flex-col items-start">
    <img src="https://cdn1.suno.ai/image_4815c59a-56ad-4870-92c2-8a4713d8da88.png" className="w-20 h-20 rounded-lg" alt="Image song" />
  </div>
  <div className="flex flex-col items-end ml-4 ">
  <p className="font-bold text-white">portuguese breakbeat</p>
  <audio
    ref={audioRef}
    src="https://cdn1.suno.ai/605c2d39-f5ca-4408-897f-e706191a1f4e.mp3"
    onTimeUpdate={handleTimeUpdate}
  />
  <div className="relative w-full h-2 bg-[#ffffff] rounded-full mt-4">
    <div
      className="absolute h-full bg-[#A5A5A5] rounded-full"
      style={{ width: `${(currentTime / duration) * 100}%` }}
    />
  </div>
  <div className="flex justify-between w-full mt-2">
    <p className="text-white font-semibold">{currentTime.toFixed(2)}</p>
    <p className="text-white font-semibold">{duration.toFixed(2)}</p>
  </div>
  <div className="flex w-full justify-between mt-2">
    <button onClick={skipBackward}>
      <img src="../public/backward.png" alt="backward" className="w-4 h-4" />
    </button>
    <button onClick={handlePlay}>
      <img src="../public/play.png" alt="play" className="w-5 h-5" />
    </button>
    <button onClick={handlePause}>
      <img src="../public/pause.png" alt="pause" className="w-5 h-5" />
    </button>
    <button onClick={skipForward}>
      <img src="../public/next.png" alt="next" className="w-4 h-4" />
    </button>
    </div>
  </div>
</div>

  );
}

export default SongPlayer;
