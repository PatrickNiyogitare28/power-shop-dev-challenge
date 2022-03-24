import React from 'react';
import styles from './styles.module.scss';

const Transactions = () => {
    return (
        <div className={styles.tableContainer}>
            <h1>TRANSACTIONS HISTORY</h1>
            <table>
                <thead>
                    <tr>
                        <th>AMOUNT</th>
                        <th>UNITES</th>
                        <th>VALID DAYS</th>
                        <th>STATUS</th>
                        <th>DATE</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>150</td>
                        <td>1450</td>
                        <td>2</td>
                        <td>ACTIVE</td>
                        <td>11 Feb 2022</td>
                    </tr>
                    <tr>
                        <td>150</td>
                        <td>1450</td>
                        <td>2</td>
                        <td>ACTIVE</td>
                        <td>11 Feb 2022</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default Transactions