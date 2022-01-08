import React, {Component}  from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Signin, Signup } from './components';

class App extends Component{
    render()
    {
        return (
            <BrowserRouter>
            <>
            <Routes>
                <Route exact path = '/log-form' element = {<Signin />} />
                <Route path = '/signin' element = {<Signin />} />
                <Route path = '/signup' element = {<Signup />} />
            </Routes>
            </>
            </BrowserRouter>
        )
    }
}

export default App
