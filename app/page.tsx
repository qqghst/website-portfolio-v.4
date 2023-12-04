'use client';
import { useEffect } from 'react';
import Intro from '@/components/main/intro';
import Outro from '@/components/main/outro';
import TechStack from '@/components/main/tech-stack';

export default function Home() {
	useEffect(() => {
		console.log(
			"%cWelcome!\n\n%cThank you for visiting my website. It's a pleasure to have you explore my digital space. If you have any questions or need assistance, don't hesitate to reach out.\n\nLooking forward to an opportunity to collaborate.\n\nBest wishes,\n@qqghstk",
			'color: #8ADAB2; font-size: 20px;',
			'color: #F8FFD2; font-size: 14px;',
		);
	}, []);

	useEffect(() => {
		(async () => {
			const LocomotiveScroll = (await import('locomotive-scroll'))
				.default;

			const locomotiveScroll = new LocomotiveScroll();
		})();
	}, []);

	return (
		<main className='overflow-x-hidden'>
			<Intro />
			<TechStack />
			<Outro />
		</main>
	);
}
