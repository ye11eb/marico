import React from 'react'

const header = () => {
  return (
    <div className='header'>
      <div className="internal_header">
        <div className="secondary_header_cont">
          <img src="/images/logo.svg" alt="" />
          <p>Marico</p>
        </div>
        <div className="main_header_cont">
          <p>Use Cases</p>
          <p>About</p>
          <p>Pricing</p>
          <p>Blog</p>
        </div>
        <div className="secondary_header_cont secondary_auth">
          <div className="header_auth"><p>Login</p></div>
          <div className="header_auth blue_bg"><p>Sign Up</p></div>
        </div>
      </div>
    </div>
  )
}

export default header
