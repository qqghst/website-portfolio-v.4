import React from 'react';
import Link from 'next/link';
import styles from './styles.module.scss';

const Logo: React.FC = () => {
	return (
		<div className={styles.logo}>
			<div className={styles.logo__container}>
				<Link href='/'>
					<span>THE LOGOTYPE</span>
				</Link>
			</div>
		</div>
	);
};

export default Logo;
