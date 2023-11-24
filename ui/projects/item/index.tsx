import React from 'react';
import Image from 'next/image';
import styles from './styles.module.scss';
import { IProjectsItemProps } from './interface';

const ProjeectItem: React.FC<IProjectsItemProps> = ({
    title,
    description,
    src,
}) => {
    return (
        <>
            <div className={styles.projectItem}>
                <div className={styles.projectItem__container}>
                    <div className={styles.imageContainer}>
                        <figure>
                            <Image
                                src={src}
                                alt={`${title} - ${description}`}
                                width={800 / 2}
                                height={200 / 2}
                            />
                        </figure>
                    </div>
                    <div className={styles.textContainer}>
                        <span className='px19'>{title}</span>
                        <span className='px13'>{description}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProjeectItem;
