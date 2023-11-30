import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';

const ScrollCircle2: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);

	const scrollCirleRef = useRef(null);

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
		<>
			<div className={styles.scrollContainer} ref={scrollCirleRef}>
				<div
					className={`${styles.btnOutline} ${styles.btnOutline1}`}
				></div>
				<div
					className={`${styles.btnOutline} ${styles.btnOutline2}`}
				></div>

				<span className={styles.span}>scroll</span>
			</div>
		</>
	);
};

export default ScrollCircle2;
