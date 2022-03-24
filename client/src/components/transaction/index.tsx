import React from 'react';
import styles from './styles.module.scss';

const Transaction: React.FC = () => {
    return (
        <div  className={styles.transactionContainer}>
            <h1>TRANSACTION</h1>
           <div className={styles.row}>
               <label>First name</label>
               <label>John</label>
           </div>
           <div className={styles.row}>
               <label>Last name</label>
               <label>Doe</label>
           </div>
           <div className={styles.row}>
               <label>Amount</label>
               <label>150</label>
           </div>
           <div className={styles.row}>
               <label>Valid days</label>
               <label>2</label>
           </div>
           <div className={styles.row}>
               <label>Unites</label>
               <label>2</label>
           </div>
        </div>
    )
}
export default Transaction;