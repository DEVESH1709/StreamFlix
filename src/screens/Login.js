import React, { useState } from 'react'
import './Login.css'
import netflixLogo from '../assets/netflix-logo.png';
import Signup from './Signup';


function Login() {
    const [signIn, setSignIn] = useState(false);


    return (
        <div className='loginScreen'>
            <div className="loginScreen_background">
                <img
                    className="loginScreen_logo"
                    src={netflixLogo} alt="" />
                <button className="loginScreen_button"
                    onClick={() => setSignIn(true)}>
                    Sign In
                </button>

                <div className="loginScreen_gradient"></div>
                <div className="loginScreen_body">
                    {signIn ? (
                        <Signup />
                    ) : (
                        <>
                            <h1>Unlimited movies, TV shows, and more.</h1>
                            <h2>Watch anywhere. Cancel anytime.</h2>
                            <h3>Ready to watch? Enter your email to create or restart your membership.</h3>
                            <div className="loginScreen_input">
                                <form>
                                    <input type="email" placeholder='Email Address' />
                                    <button className='loginScreen_getStarted'
                                        onClick={() => setSignIn(true)}>
                                        GET STARTED
                                    </button>
                                </form>
                            </div>
                        </>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Login
