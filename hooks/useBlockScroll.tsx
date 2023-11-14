'use client'

import React, { createContext, useContext, useState } from 'react';

type ScrollBlockContextValue = {
    scrollBlocked: boolean;
    setScrollBlocked: (value: boolean) => void;
};

const ScrollBlockContext = createContext<ScrollBlockContextValue>({
    scrollBlocked: false,
    // setScrollBlocked: () => {},
    setScrollBlocked: () => console.log('setProjectTitle not implemented'),
});

export const useScrollBlock = (): [() => void, () => void] => {
    const { scrollBlocked, setScrollBlocked } = useContext(ScrollBlockContext);
    const [canUseDOM, setCanUseDOM] = useState<boolean>(
        typeof window !== 'undefined'
    );
    const html = canUseDOM ? document.documentElement : undefined;
    const body = canUseDOM ? document.body : undefined;

    const blockScroll = () => {
        if (!canUseDOM || !body || !body.style || scrollBlocked) return;

        const scrollBarWidth = window.innerWidth - html!.clientWidth;
        const bodyPaddingRight =
            parseInt(
                window.getComputedStyle(body).getPropertyValue('padding-right')
            ) || 0;

        html!.style.position = 'relative';
        html!.style.overflow = 'hidden';
        body!.style.position = 'relative';
        body!.style.overflow = 'hidden';
        body!.style.paddingRight = `${bodyPaddingRight + scrollBarWidth}px`;

        setScrollBlocked(true);
    };

    const allowScroll = () => {
        if (!canUseDOM || !body || !body.style || !scrollBlocked) return;

        html!.style.position = '';
        html!.style.overflow = '';
        body!.style.position = '';
        body!.style.overflow = '';
        body!.style.paddingRight = '';

        setScrollBlocked(false);
    };

    return [blockScroll, allowScroll];
};

type ScrollBlockProviderProps = {
    children: React.ReactNode;
};

export const ScrollBlockProvider = ({ children }: ScrollBlockProviderProps) => {
    const [scrollBlocked, setScrollBlocked] = useState(false);

    const value = {
        scrollBlocked,
        setScrollBlocked,
    };

    return (
        <ScrollBlockContext.Provider value={value}>
            {children}
        </ScrollBlockContext.Provider>
    );
};
