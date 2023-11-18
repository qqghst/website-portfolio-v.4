import React, { useState, useEffect, useRef } from 'react';

const Music: React.FC = () => {
    const [isPlaying, setIsPlaying] = useState<boolean>(true);
    const audioRef = useRef<HTMLAudioElement>(null);

    useEffect(() => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.play().catch((error) => {
                    console.error('Ошибка воспроизведения:', error);
                    setIsPlaying(false);
                });
            } else {
                audioRef.current.pause();
            }
        }
    }, [isPlaying]);

    const toggleAudio = () => {
        setIsPlaying(!isPlaying);
    };

    return (
        <div>
            <audio
                ref={audioRef}
                loop
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}>
                <source
                    src='/music/videoplayback.mp4'
                    type='audio/mpeg'
                />
            </audio>
            <button
                onClick={toggleAudio}
                aria-label={isPlaying ? 'Выключить музыку' : 'Включить музыку'}>
                {isPlaying ? 'Выключить музыку' : 'Включить музыку'}
            </button>
        </div>
    );
};

export default Music;
