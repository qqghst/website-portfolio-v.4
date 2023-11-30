import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './styles.module.scss';
import { IProjectsItemProps } from './interface';

const ProjectItem: React.FC<IProjectsItemProps> = ({
	title,
	description,
	src,
	href,
}) => {
	return (
		<>
			<div className={styles.projectItem}>
				<div className={styles.projectItem__container}>
					<Link href={href} target='_blank' rel='noopener noreferrer'>
						<div className={`${styles.border}`}>
							<figure className={styles.imgContainer}>
								<Image
									src={src}
									alt={`${title} - ${description}`}
									width={800 / 2}
									height={200 / 2}
								/>
							</figure>

							<div className={styles.textContainer}>
								<div>
									<Image
										src='/projects/arrow.svg'
										width={16}
										height={1}
										alt='1'
									/>
									<span className='px19'>{title}</span>
								</div>
								<span className='px13'>{description}</span>
							</div>
						</div>
					</Link>
				</div>
			</div>
		</>
	);
};

export default ProjectItem;
