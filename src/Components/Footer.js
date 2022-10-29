import React from 'react'
import '../Styles/home.css'

const Footer = () => {
  return (
    <React.Fragment>
      <div className="container-fluid footer">
        <div className='row'>
          <div className='col-sm-4'>
            <h5>Mission</h5>
            <p>You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.</p>
          </div>
          <div className='col-sm-4'>
            <h5>Privacy Policy</h5>
            <p>We don’t sell your personal information, but we still have to tell you what we collect from you when you
              access or use our websites and how we use it. We may update this policy from time to time. Your
              continued use of this site indicates your agreement to the updated terms. </p>
          </div>
          <div className='col-sm-4'>
            <h5>About Us</h5>
            <p>You want to wake up in the morning and think the future is going to be great - and that’s what being a spacefaring civilization is all about. It’s about believing in the future and thinking that the future will be better than the past. And I can’t think of anything more exciting than going out there and being among the stars.</p>
          </div>
        </div>
      </div>
    </React.Fragment>
  )
}

export default Footer