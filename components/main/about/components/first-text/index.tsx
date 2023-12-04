'use client';

import React, { useRef, useEffect } from 'react';
import styles from './styles.module.scss';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import useWindowSize from '@/hooks/useWindowSize';

const FirstText: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);

	const firstTextRef = useRef<HTMLDivElement>(null);
	const secondTextRef = useRef<HTMLDivElement>(null);

	const { width } = useWindowSize();
	const isMobile = width < 768;

	useEffect(() => {
		gsap.registerPlugin(ScrollTrigger);
		tl.current = gsap.timeline();

		tl.current.fromTo(
			firstTextRef.current,
			{ opacity: 0, y: 120 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power3.out',
				stagger: 0.2,
				scrollTrigger: {
					trigger: firstTextRef.current,
					start: 'top 95%',
					// start: 'top bottom',
					scrub: 1,
				},
			},
		);

		tl.current.fromTo(
			secondTextRef.current,
			{ opacity: 0, y: isMobile ? 32 : 180 },
			{
				opacity: 1,
				y: 0,
				duration: 1,
				ease: 'power3.out',
				stagger: 0.2,
				scrollTrigger: {
					trigger: secondTextRef.current,
					start: 'top 95%',
					// start: 'top bottom',
					scrub: 1,
				},
			},
			'<',
		);

		return () => {
			tl.current?.kill();
		};
	}, []);
	return (
		<div className={styles.firstText}>
			<div className={styles.firstText__container}>
				<div ref={firstTextRef}>
					<h2 className='h2'>
						Hello there. <br className='hide-on-desktop' /> Guero
						solo.
					</h2>

					<p className='h4'>
						I&apos;m Dmitry, a 23-year-old with a passion for
						frontend development and web design. I used to work as a
						web-designer, later i learn code and start working as a
						frontend developer. I&apos;ve experienced both corporate
						environments and freelance projects. Currently, I&apos;m
						open to exciting new opportunities.
					</p>
				</div>
				<div ref={secondTextRef}>
					<p className='h5'>
						&quot;Know thyself — it sounds like a medical
						prescription, but in these words lies truth and power.
						They lead us to the knowledge that the world we perceive
						is limited by our perception and mind.&quot;
					</p>
				</div>
			</div>
		</div>
	);
};

export default React.memo(FirstText);
