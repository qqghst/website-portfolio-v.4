'use client';

import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import Logo from './components/logo';
import Time from './components/time';
import Menu from './components/menu';
import gsap from 'gsap';

const Navbar: React.FC = () => {
	const tl = useRef<gsap.core.Timeline | null>(null);

	const navbarRef = useRef<HTMLDivElement>(null);
	const logoRef = useRef<HTMLDivElement>(null);
	const timeRef = useRef<HTMLDivElement>(null);
	const menuRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		tl.current = gsap.timeline();

		tl.current.fromTo(
			[logoRef.current, timeRef.current, menuRef.current],
			{ opacity: 0 },
			{
				opacity: 1,
				duration: 0.8,
				delay: 2,
				stagger: 0.45,
				autoAlpha: 1,
			},
		);

		tl.current.to(navbarRef.current, {
			zIndex: 0,
			scrollTrigger: {
				trigger: menuRef.current,
				start: '+=1000px top',
			},
		});

		return () => {
			tl.current?.kill();
		};
	}, []);

	return (
		<div className={styles.navbar}>
			<div className={styles.navbar__container} ref={navbarRef}>
				<div className={styles.logo} ref={logoRef}>
					<Logo />
				</div>
				<div
					className={`${styles.time} hide-on-mobile -translate-x-[3.274vw]`}
					ref={timeRef}
				>
					<Time />
				</div>
				<div className={styles.menu} ref={menuRef}>
					<Menu />
				</div>
			</div>
		</div>
	);
};

export default React.memo(Navbar);
