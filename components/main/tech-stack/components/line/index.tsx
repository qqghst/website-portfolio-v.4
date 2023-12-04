'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';

const Line: React.FC = () => {
	const path = useRef<SVGPathElement>(null);

	let progress: number = 0;
	let time: number = Math.PI / 2;
	let reqId: number | null = null;
	let x: number = 0.5;

	useEffect(() => {
		setPath(progress);
	}, []);

	const setPath = (progress: number) => {
		const { innerWidth } = window;
		const width = innerWidth;

		if (path.current) {
			path.current.setAttributeNS(
				'',
				'd',
				`M0 50 Q${width * x} ${50 + progress}, ${width} 50`,
			);
		}
	};

	const manageMouseEnter = () => {
		if (reqId !== null) {
			cancelAnimationFrame(reqId);
			resetAnimation();
		}
	};

	const manageMouseMove = (
		e: React.MouseEvent<HTMLDivElement, MouseEvent>,
	) => {
		const { movementY, clientX } = e;
		if (path.current) {
			const rect = path.current.getBoundingClientRect();
			if (rect) {
				const { left, width } = rect;
				x = (clientX - left) / width;
				progress += movementY;
				setPath(progress);
			}
		}
	};

	const manageMouseLeave = () => {
		animateOut();
	};

	const lerp = (x: number, y: number, a: number) => x * (1 - a) + y * a;

	const animateOut = () => {
		const newProgress = progress * Math.sin(time);
		time += 0.2;
		setPath(newProgress);
		progress = lerp(progress, 0, 0.025);

		if (Math.abs(progress) > 0.75) {
			reqId = window.requestAnimationFrame(animateOut);
		} else {
			resetAnimation();
		}
	};

	const resetAnimation = () => {
		time = Math.PI / 2;
		progress = 0;
	};
	return (
		<div className={styles.lineContainer}>
			<div className={styles.line}>
				<div
					onMouseEnter={manageMouseEnter}
					onMouseMove={manageMouseMove}
					onMouseLeave={manageMouseLeave}
					className={styles.box}
				></div>
				<svg>
					<path ref={path}></path>
				</svg>
			</div>
		</div>
	);
};

export default Line;
