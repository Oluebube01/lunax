import React from 'react'

const Header = () => {
  return (
    <>
        {/* Header */}
        <header>
            {/* nav */}
            <div className="nav container">
              <a href="#" className='logo'> Lunax </a>
              {/* Search box */}
              <div className="search-box">
                <input type="search" name="" id="search-input" placeholder='Search movie' />
                <box-icon name="search-alt" color="#f2f3f3" className="bx"></box-icon>
              </div>
              {/* user */}
              <a href="#" className='user'>
                {/* todo: add user avatar */}
                <img src="/profile-pic (1).png" alt="" className='user-img' />
              </a>
              {/* navbar */}
              <div className="navbar">
                <a href="#home" className="nav-link nav-active">
                  <box-icon name='home-smile' color="#f2f3f3"
                  className="bx"></box-icon>
                  <span className="nav-link-titl">Home</span>
                </a>
                <a href="#home" className="nav-link">
                  <box-icon name='hot' type='solid' color='#f2f3f3'
                  className="bx"></box-icon>
                  <span className="nav-link-title">Trending</span>
                </a>
                <a href="#home" className="nav-link">
                  <box-icon 
                  name="compass" color="#f2f3f3"
                  className="bx"></box-icon>
                  <span className="nav-link-title">Explore</span>
                </a>
                <a href="#home" className="nav-link">
                  <box-icon 
                  name="tv" color="#f2f3f3"
                  className="bx"></box-icon>
                  <span className="nav-link-title">Movie</span>
                </a>
                <a href="#home" className="nav-link">
                  <box-icon 
                  name="heart" color="#f2f3f3"
                  className="bx"></box-icon>
                  <span className="nav-link-title">Favorite</span>
                </a>
              </div>
            </div>
          </header> 
    </>
  )
}

export default Header