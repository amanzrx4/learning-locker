import React from 'react'
import "./header.css"
function Header() {
  return (
    <div className='header-container'>
        <div className="header-image">
            <img src="https://images.unsplash.com/photo-1542810634-71277d95dcbb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80" alt="children studying" className="header-image" />
        </div>
        <div className="header-content">
            <h1>we are here to educate you</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate similique incidunt voluptatem omnis laborum quasi fugiat sapiente aperiam reprehenderit illo!</p>
        </div>
    </div>
  )
}

export default Header