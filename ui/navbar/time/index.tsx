'use client';

import React, { useState, useEffect } from 'react';
import styles from './styles.module.scss';

const Time: React.FC = () => {
	const [currentTime, setCurrentTime] = useState(new Date());

	useEffect(() => {
		const timer = setInterval(() => {
			setCurrentTime(new Date());
		}, 1000);

		return () => clearInterval(timer);
	}, []);

	const options: Intl.DateTimeFormatOptions = {
		hour: '2-digit',
		minute: '2-digit',
		hour12: true,
	};
	const formattedTime = currentTime.toLocaleTimeString('en-US', options);

	return (
		<div className={styles.time}>
			<div className={styles.time__container}>
				<span>{formattedTime}</span>
			</div>
		</div>
	);
};

export default Time;
