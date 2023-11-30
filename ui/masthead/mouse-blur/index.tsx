import React, { useEffect, useRef } from 'react';
import styles from './styles.module.scss';
import { IMouseBlurProps } from './interface';

const MouseBlur: React.FC<IMouseBlurProps> = ({ children }) => {
	const blobRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const handleMouseMove = (event: PointerEvent) => {
			const { clientX, clientY } = event;

			blobRef.current?.animate(
				{
					left: `${clientX}px`,
					top: `${clientY}px`,
				},
				{ duration: 3000, fill: 'forwards' },
			);
		};
		window.addEventListener('pointermove', handleMouseMove);

		return () => {
			window.removeEventListener('pointermove', handleMouseMove);
		};
	}, [blobRef]);
	return (
		<div className={styles.blobContainer}>
			<div className={`${styles.blob}`} ref={blobRef} />
			{children}
		</div>
	);
};

export default MouseBlur;
