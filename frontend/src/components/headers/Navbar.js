import React from 'react';
import '../../css/components/headers/navbar.css';
import request from '../../services/request'

function Navbar() {
  const performLogout = async () => {
    await request('DELETE', '/users/sign_out')
    localStorage.setItem("loggedIn", false)
    window.location.href = "/login"
  }

  return (
    <div className='navbar-default-wrapper'>
      <a onClick={performLogout}>Logout</a>
    </div>
  );
}

export default Navbar;