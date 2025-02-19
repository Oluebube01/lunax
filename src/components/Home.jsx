import React from 'react'

const Home = () => {
  return (
    <>
         {/* Home */}
        <section className="home container" id="home">
            <img src="https://m.media-amazon.com/images/M/MV5BMDU0NjcwOGQtNjNjOS00NzQ3LWIwM2YtYWVmODZjMzQzN2ExXkEyXkFqcGc@._V1_.jpg" alt="" className='home-img' />
            {/* home text */}
            <div className="home-text">
              <h1 className="home-title">Alien: Romulus <br />Bodyguard</h1>
              <p>Releasing 16th August, 2024</p>
              <a href="#" className="watch-btn">
                <box-icon 
                name="right-arrow" color="#f2f3f3"
                className="bx"></box-icon>
                <span>Watch the trailer</span>
              </a>
            </div>
          </section>
          {/* home end */}
    </>
  )
}

export default Home