'use client';

import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import Link from 'next/link';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import SplitType from 'split-type';

const Title: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);

	const firstLineRef = useRef<HTMLSpanElement | null>(null);
	const secondLineRef = useRef<HTMLSpanElement | null>(null);
	const gradientRef = useRef<HTMLSpanElement | null>(null);

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		tl.current = gsap.timeline({
			scrollTrigger: {
				trigger: firstLineRef.current,
				start: 'top center',
				toggleActions: 'play none none none',
			},
		});

		const span1 = new SplitType(firstLineRef.current!, {
			types: 'chars',
			lineClass: 'lineParent',
		});
		const span2 = new SplitType(secondLineRef.current!, {
			types: 'chars',
			lineClass: 'lineParent',
		});

		tl.current.fromTo(
			[span1.chars, span2.chars],
			{ opacity: 0, y: 32 },
			{
				duration: 0.8,
				opacity: 1,
				y: 0,
				stagger: {
					each: 0.04,
					amount: 1.6,
				},
				ease: 'power3.out',
			},
		);

		tl.current.fromTo(
			gradientRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 1.2, delay: '-0.6' },
		);

		return () => {
			tl.current?.kill();
		};
	}, []);
	return (
		<>
			<span ref={firstLineRef} className='h1 text-black'>
				wanna create
			</span>

			<span
				ref={secondLineRef}
				className={`h1 text-black ${styles.margin2}`}
			>
				project together?
			</span>

			<span
				ref={gradientRef}
				className={`h1 text-black ${styles.margin3}`}
			>
				<Link
					href='https://t.me/qqghstk'
					target='_blank'
					rel='noopener noreferrer'
				>
					<span className='gradient'>contact me.</span>
				</Link>
			</span>
		</>
	);
};

export default React.memo(Title);
