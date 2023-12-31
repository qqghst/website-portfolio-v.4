'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';

const ScrollCircle: React.FC = () => {
	const scrollCirleRef = useRef(null);
	const tl = useRef<gsap.core.Timeline | null>(null);

	useEffect(() => {
		tl.current = gsap.timeline();

		tl.current.fromTo(
			scrollCirleRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 2, delay: 2.2 },
		);

		return () => {
			tl.current?.kill();
		};
	}, []);
	return (
		<button className={styles.scrollCircle} ref={scrollCirleRef}>
			<div className={styles.circle}></div>
			<span className={styles.span}>scroll</span>
		</button>
	);
};

export default ScrollCircle;
