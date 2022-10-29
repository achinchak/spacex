import React from 'react'
import b1 from './../../src/b1.jpg'
import '../Styles/home.css'

const Banner = () => {
  return (
    <React.Fragment>
      <header>
        <div className='container-fluid'>
          <div className="carousel">
            <img src={b1} className="w-100" alt="..." />
          </div>
        </div>
      </header>
    </React.Fragment>
  )
}

export default Banner