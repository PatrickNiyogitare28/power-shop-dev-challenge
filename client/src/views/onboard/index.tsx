import BuyPower from '@components/forms/buy-power';
import MeterSignup from '@components/forms/meter-signup';
import React, { useState } from 'react';
import styles from './styles.module.scss';

const Onboard: React.FC = () => {
    const [showSignup, setShowSignup] = useState<boolean>(false);
    return (
        <div className={styles.container}>
            <div className='' style={{width:'50%'}}>
                <h1  data-testid="highlight">Welcome to Power shopping App</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nemo sed, impedit,  </p>
                {!showSignup && 
                <button onClick={() => setShowSignup(true)}>SIGN-UP FOR A MATER</button>
                }
                {showSignup && 
                <button  onClick={() => setShowSignup(false)}>BUY POWER</button>
                }
            </div>
            <div style={{width:'40%'}} data-testid="forms-wrapper">
                {!showSignup &&
                <BuyPower />
                }
                {showSignup &&
                <MeterSignup />
                }
            </div>
        </div>
    )
}

export default Onboard