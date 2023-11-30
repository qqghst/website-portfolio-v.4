import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/dist/ScrollTrigger';
import Projects from '../projects';
import Footer from '@/components/footer';

const Outro: React.FC = () => {
	gsap.registerPlugin(ScrollTrigger);
	const tl = useRef<gsap.core.Timeline | null>(null);

	const containerRef = useRef<HTMLDivElement>(null);
	const projectsRef = useRef<HTMLDivElement>(null);
	const footerRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!containerRef.current || !projectsRef.current || !footerRef.current)
			return;

		tl.current = gsap.timeline({ delay: 1 });

		tl.current.fromTo(
			containerRef.current,
			{
				backgroundColor: '#000000',
			},
			{
				backgroundColor: '#ffffff',
				scrollTrigger: {
					trigger: projectsRef.current,
					start: 'bottom +=600',
					end: '+=1000',
					scrub: true,
				},
			},
		);
	}, []);
	return (
		<div ref={containerRef}>
			<div ref={projectsRef}>
				<Projects />
			</div>
			<div ref={footerRef}>
				<Footer />
			</div>
		</div>
	);
};

export default React.memo(Outro);
