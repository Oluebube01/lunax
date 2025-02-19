import React from 'react'
import {Swiper, SwiperSlide }from 'swiper/react';
import 'swiper/css/bundle';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Pmovies = () => {
  return (
    <>
         {/* popular section start */}
        <section className="popular container" id="popular">
          <div className="heading">
            <h2 className="heading-title">Popular Movies</h2>
          </div>
          <div className="popular-c
          ontent swiper">
            <div className="swiper-wrapper">
            <Swiper 
                style={{
                  width: '100%',

                }}
                slidesPerView={1}
                spaceBetween={10}
                centeredSlides={true}
                autoplay={{
                  delay: 755500,
                  disableOnInteraction: false,
                }}
                pagination={{
                  clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
                breakpoints={
                  {
                    280: {
                      slidesPerView: 1,
                      spaceBetween: 10,
                    },
                    320: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    510: {
                      slidesPerView: 2,
                      spaceBetween: 10,
                    },
                    758: {
                      slidesPerView: 3,
                      spaceBetween: 15,
                    },
                    900: {
                      slidesPerView: 4,
                      spaceBetween: 20,
                    },
                  }
                }
              >
                <SwiperSlide>
                <div className="movie-box">
                      <img src="https://m.media-amazon.com/images/M/MV5BY2FhZGE3NmEtNWJjOC00NDI1LWFhMTQtMjcxNmQzZmEwNGIzXkEyXkFqcGc@._V1_.jpg" alt="" className='movie-box-img' />
                      <div className="box-text">
                        <h2 className="movie-title">Nosferatu</h2>
                        <span className="movie-type">Dark Fantasy</span>
                        <a href="https://www.imdb.com/title/tt5040012/" className="watch-btn play-btn">
                          <box-icon 
                          name="right-arrow" color="#f2f3f3"
                          className="bx"></box-icon>
                        </a>
                      </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                <div className="movie-box">
                      <img src="https://m.media-amazon.com/images/M/MV5BNjBhMWVmYjQtYmI2NC00NjdiLTliMjQtODliYjI5OTZmMzczXkEyXkFqcGc@._V1_.jpg" alt="" className='movie-box-img' />
                      <div className="box-text">
                        <h2 className="movie-title">Emilia Pérez</h2>
                        <span className="movie-type">Action</span>
                        <a href="https://www.imdb.com/title/tt20221436/" className="watch-btn play-btn">
                          <box-icon 
                          name="right-arrow" color="#f2f3f3"
                          className="bx"></box-icon>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                <SwiperSlide>
                <div className="movie-box">
                      <img src="https://m.media-amazon.com/images/M/MV5BMWEzOGNlY2EtMzlkZS00ODllLThmYzAtNmU4ZmJkZmZmZTQ4XkEyXkFqcGc@._V1_.jpg" alt="" className='movie-box-img' />
                      <div className="box-text">
                        <h2 className="movie-title">The Brutalist</h2>
                        <span className="movie-type">Drama</span>
                        <a href="https://www.imdb.com/title/tt8999762/" className="watch-btn play-btn">
                          <box-icon 
                          name="right-arrow" color="#f2f3f3"
                          className="bx"></box-icon>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                <div className="movie-box">
                      <img src="https://m.media-amazon.com/images/M/MV5BMWEzOGNlY2EtMzlkZS00ODllLThmYzAtNmU4ZmJkZmZmZTQ4XkEyXkFqcGc@._V1_.jpg" alt="" className='movie-box-img' />
                      <div className="box-text">
                        <h2 className="movie-title">The Brutalist</h2>
                        <span className="movie-type">Drama</span>
                        <a href="https://www.imdb.com/title/tt8999762/" className="watch-btn play-btn">
                          <box-icon 
                          name="right-arrow" color="#f2f3f3"
                          className="bx"></box-icon>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                <div className="movie-box">
                      <img src="https://m.media-amazon.com/images/M/MV5BMWEzOGNlY2EtMzlkZS00ODllLThmYzAtNmU4ZmJkZmZmZTQ4XkEyXkFqcGc@._V1_.jpg" alt="" className='movie-box-img' />
                      <div className="box-text">
                        <h2 className="movie-title">The Brutalist</h2>
                        <span className="movie-type">Drama</span>
                        <a href="https://www.imdb.com/title/tt8999762/" className="watch-btn play-btn">
                          <box-icon 
                          name="right-arrow" color="#f2f3f3"
                          className="bx"></box-icon>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide>
                <div className="movie-box">
                      <img src="https://m.media-amazon.com/images/M/MV5BMWEzOGNlY2EtMzlkZS00ODllLThmYzAtNmU4ZmJkZmZmZTQ4XkEyXkFqcGc@._V1_.jpg" alt="" className='movie-box-img' />
                      <div className="box-text">
                        <h2 className="movie-title">The Brutalist</h2>
                        <span className="movie-type">Drama</span>
                        <a href="https://www.imdb.com/title/tt8999762/" className="watch-btn play-btn">
                          <box-icon 
                          name="right-arrow" color="#f2f3f3"
                          className="bx"></box-icon>
                        </a>
                      </div>
                    </div>
                  </SwiperSlide>
              </Swiper>
            </div>
          </div>
          <div>
          <a href="./Allmovies.jsx" target='_blank'
          style={{
            margin: 'auto',
            marginRight: '50%',
            color: 'white',
            textAlign: 'center'
          }}>
            See More
          </a>
          </div>
        </section>
        
    </>
  )
}

export default Pmovies