import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './signin.css';
import eLea_img from '../../media/imgs/external-learning-artificial-intelligence-becris-lineal-becris.png';

const Signin = () => {
    return (
        <main>
            <div className='logSection'>
                <div className='logSection-1'>
                    <p> Learn everywhere and anytime, set your own schedule, find your course <strong>now</strong></p>
                    <img src={eLea_img} alt='learning'></img>
                </div>
                <div className='logSection-2'>
                    <div className='logSection-2-head'>
                        <h3><div className='big-signin'>
                            <Link className='linkin' to="/signin"> Sign in </Link>
                        </div></h3>
                        <h4>or</h4>
                        <h3><div className='big-signup'>
                            <Link className='linkin' to="/signup"> Sign up </Link>
                        </div></h3>
                    </div>
                    <div className='logSection-2-form'>
                        <form className='logSection-2-formSelf'>
                            <input id='email-inp-id' name='email-inp' type='email' placeholder='Email address'></input>
                            <input id='password-inp-id' name='password-inp' type='password' placeholder='Password'></input>
                            <div id='devLog'>
                                <button id='btn-inp-id'>Sign in</button>
                                <label><Link to="/signup">Sing up</Link></label>
                            </div>
                        </form>
                    </div>
                </div>
                
            </div>
        </main>
    )
}

export default Signin
