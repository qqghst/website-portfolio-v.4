import React from 'react';
import styles from './styles.module.scss';

const PostFooter = () => {
  return (
    <div className={styles.postFooter}>
        <div className={styles.postFooter__container}>
            <span>&copy; DMITRY O. All Rights Reserved˝</span>
            <span>&copy; 2023</span>
        </div>
    </div>
  )
}

export default PostFooter