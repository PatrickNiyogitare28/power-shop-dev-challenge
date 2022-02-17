import Navigation from '@components/navigation';
import Transaction from '@components/transaction';
import Transactions from '@components/transactions';
import React from 'react';
import styles from './styles.module.scss';

const Dashboard = () => {
    return (
        <div className={styles.dashboardContainer}>
            <Navigation />
            <div className={styles.contentWrapper}>
                <div className={styles.transactionWrapper}>
                    <Transaction />
                </div>
                <div className={styles.transactionsWrapper}>
                    <Transactions />
                </div>
            </div>
        </div>
    )
}
export default Dashboard;