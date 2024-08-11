'use client';
import { useEffect, useRef, useState } from 'react';

const useSoundPlayer = <T extends string>(url: T) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    const audioPlayback = new Audio(url);
    audioPlayback.preload = 'auto';
    audioPlayback.addEventListener('ended', () => setIsPlaying(false));
    audioRef.current = audioPlayback;

    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        audioRef.current.removeEventListener('ended', () =>
          setIsPlaying(false)
        );
        audioRef.current = null;
      }
    };
  }, [url]);

  const handlePlay = () => {
    if (audioRef.current) {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return { handlePlay, isPlaying };
};

export default useSoundPlayer;
