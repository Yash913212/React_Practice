import React from 'react';
import './render.css'

function UserGreeting(props) {
    return props.isLoggedIn ? <h2 className='welcome'>Welcome</h2> : <h2 className='pro'>Please Login to continue</h2>;

}
export default UserGreeting;