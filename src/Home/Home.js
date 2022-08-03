import './Home.css'
import React from 'react'
import SignUp from '../SignUp/SignUp'
import SignIn from '../SignIn/SignIn'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import Footer from '../SignUp/Footer/Footer'
import Header from '../SignUp/Header/Header'
export default function Routing() {
    return (
        <div>

            <Router>
                <nav className='nav'>

                    <ul>
                        <Link to='/' style={{ textDecoration: 'none' }}>
                            <li>
                                <h1>HOME</h1>
                            </li>
                        </Link>
                        <Link to='/SignIn' style={{ textDecoration: 'none' }}>
                            <li className='item'>
                                SignIn
                            </li>
                        </Link>
                        <Link to='/SignUp' style={{ textDecoration: 'none' }}>
                            <li className='item'>
                                SignUp
                            </li>
                        </Link>

                    </ul>
                </nav>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/SignUp' element={<SignUp />} />
                    <Route path='/SignIn' element={<SignIn />} />
                </Routes>
                <Footer />
            </Router>

        </div>





    )
}

const Home = () => {
    return (

        <div className='Home'>
            <h2>HOME PAGE</h2>
        </div>
    )
}