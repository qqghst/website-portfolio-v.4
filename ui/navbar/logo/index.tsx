import React from 'react';
import styles from './styles.module.scss'

const Logo: React.FC = () => {
  return (
    <div className={styles.logo}>
        <div className={styles.logo__container}>
            <span>THE LOGOTYPE</span>
        </div>
    </div>
  )
}

export default Logo