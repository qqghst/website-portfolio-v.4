'use client'

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
// 'use client';
// import { useState, useEffect } from 'react';

// interface Size {
//     width: number | undefined;
//     // height: number | undefined;
// }

// const useWindowSize = () => {
//     const [size, setSize] = useState<Size>({
//         width: undefined,
//         // height: undefined,
//     });

//     useEffect(() => {
//         if (typeof window !== 'undefined') {
//             const handleResize = () => {
//                 setSize({
//                     width: window.innerWidth,
//                     // height: window.innerHeight,
//                 });
//             };

//             handleResize();

//             // Add resize event listener
//             window.addEventListener('resize', handleResize);

//             return () => window.removeEventListener('resize', handleResize);
//         }
//     }, []);

//     return size;
// };

// export default useWindowSize;
