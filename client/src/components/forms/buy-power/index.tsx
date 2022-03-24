import Input from '@components/elements/input';
import React from 'react';
import { useHistory } from 'react-router-dom';

const BuyPower = () => {
    const history = useHistory();
    return (
        <div>
            <form style={{width:'100%'}}>
                <Input placeholder='Meter number' />
                <Input placeholder='Amount in FRW' />
                <button style={{width:'95%',padding:'2em'}} onClick={() => history.push('/dashboard')}>BUY</button>
            </form>
        </div>
    )
}
export default BuyPower;