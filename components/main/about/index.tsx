import React from 'react';
import styles from './styles.module.scss';
import FirstText from '@/ui/about/first-text';
import SecondText from '@/ui/about/second-text';
import ThirdText from '@/ui/about/third-text';

const About: React.FC = () => {
	return (
		<div className={`${styles.secondText}`}>
			<div className={styles.seconeText__container}>
				<FirstText />
				<SecondText />
				<ThirdText />
			</div>
		</div>
	);
};

export default React.memo(About);
