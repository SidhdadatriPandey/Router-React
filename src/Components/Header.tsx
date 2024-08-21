import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <div  className='header'>
            <h1>Router</h1>
        
                <ul className='header-child'>
                    <li>
                        <Link to="/" className='link'>SignUp</Link>
                    </li>
                    <li>
                        <Link to="/cart" className='link'>Login</Link>
                    </li>
                    <li>
                        <Link to="/suggestion" className='link'>Suggestion</Link>
                    </li>
                </ul>
    
        </div>
    )
}

export default Header
