import React from 'react';
import styles from './styles.module.scss';

export interface IProps {
  placeholder: string
}
const Input: React.FC<IProps> = ({placeholder}) => {
    return (
        <div className={styles.inputWrapper}>
            <input placeholder={placeholder} />
        </div>
    )
}
export default Input