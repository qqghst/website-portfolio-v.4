import { useState, useEffect } from 'react';

const useWindowSize = () => {
    // const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
    const [size, setSize] = useState({ width: window.innerWidth });

    useEffect(() => {
        const handleResize = () => {
            // setSize({ width: window.innerWidth, height: window.innerHeight });
            setSize({ width: window.innerWidth });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
};

export default useWindowSize;
