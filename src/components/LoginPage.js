import React from 'react';
import { connect } from 'react-redux';
import { startLogin } from '../actions/auth';


export const LoginPage = ({ startLogin }) => (  // startLogin is a function defined in auth.js
    <div>
        <h1>Login</h1>
        <button onClick={startLogin}>Login</button>
    </div>
);

const mapDispatchToProps = (dispatch) => ({
    startLogin: () => dispatch(startLogin())
});

export default connect(undefined,mapDispatchToProps)(LoginPage);

