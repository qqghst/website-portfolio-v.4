import React from 'react';
import styles from './styles.module.scss';
import FirstText from './components/first-text';
import SecondText from './components/second-text';
import ThirdText from './components/third-text';

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
