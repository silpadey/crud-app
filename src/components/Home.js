import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
    return (
        <div className='home'>
            <h1 style={{ color: 'white' }}>Home Page</h1>
            <button className='btn'><Link to='/signup'>Sign Up</Link></button>
            <button className='btn'><Link to='/signin'>Sign In</Link></button>
            <button className='btn'><Link to='/test'>Test</Link></button>
            <button className='btn'><Link to='/dashboard'>Dashboard</Link></button>
        </div>
    )
}

export default Home