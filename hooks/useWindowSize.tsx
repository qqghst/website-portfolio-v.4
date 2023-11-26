// 'use client'

// import { useState, useEffect } from 'react';

// const useWindowSize = () => {
//     // const [size, setSize] = useState({ width: window.innerWidth, height: window.innerHeight });
//     const [size, setSize] = useState({ width: window.innerWidth });

//     useEffect(() => {
//         const handleResize = () => {
//             // setSize({ width: window.innerWidth, height: window.innerHeight });
//             setSize({ width: window.innerWidth });
//         };

//         window.addEventListener('resize', handleResize);
//         handleResize();

//         return () => window.removeEventListener('resize', handleResize);
//     }, []);

//     return size;
// };

// export default useWindowSize;

'use client';

import { useState, useEffect } from 'react';

const isSSR = typeof window === 'undefined';

const useWindowSize = () => {
    const [size, setSize] = useState({
        width: isSSR ? 0 : window.innerWidth,
    });

    useEffect(() => {
        if (isSSR) return;

        const handleResize = () => {
            setSize({ width: window.innerWidth });
        };

        window.addEventListener('resize', handleResize);
        handleResize();

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return size;
};

export default useWindowSize;
