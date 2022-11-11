import React from 'react'
import Login from '../components/Login'
import NavLink from '../components/Navbar/NavLink'

import 'bootstrap/dist/css/bootstrap.min.css';

function Home() {
  return (
    <div>
        <Login />
        <NavLink />
    </div>
  )
}

export default Home