import React from 'react';
import styles from './styles.module.scss';

const Navigation: React.FC = ({}) => {
  return (
      <div className={styles.navContainer}>
        <label>DASHBOARD</label>
        <label>John Doe</label>
      </div>
  )
}
export default Navigation;