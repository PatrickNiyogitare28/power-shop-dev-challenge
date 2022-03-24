import Input from '@components/elements/input';
import React from 'react';
import { useHistory } from 'react-router-dom';

const MeterSignup = () => {
    const history = useHistory()
    return (
        <div>
            <form style={{width:'100%'}}>
                <Input placeholder='First Name' />
                <Input placeholder='Last Name' />
                <Input placeholder='Phone Number' />
                <button style={{width:'95%',padding:'2em'}} onClick={() => history.push('/dashboard')}>SIGNUP FOR METER</button>
            </form>
        </div>
    )
}
export default MeterSignup;