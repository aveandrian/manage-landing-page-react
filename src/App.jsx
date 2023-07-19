import './App.css'
import Navbar from './components/Navbar'
import {Swiper, SwiperSlide} from 'swiper/react'
import 'swiper/css';


function App() {
  function handleSubmit(){

  }
  return (
    <>
       <Navbar />
      <section className='header-section'>
        <div className='header-description'>
          <h1 className='header-title'>
            Bring everyone together to build better products.
          </h1>
          <p className='header-text'>
              Manage makes it simple for software teams to plan day-to-day 
              tasks while keeping the larger team goals in view.
          </p>
          <button className='get-started-btn'>Get Started</button>
        </div>
        <img className='header-illustration' src='/images/illustration-intro.svg'></img>
      </section>
      <section className='whats-diff-section'>
        <div className='whats-diff-description'>
          <h1 className='whats-diff-title'>What’s different about Manage?</h1>
          <p className='whats-diff-text'>
            Manage provides all the functionality your team needs, without 
            the complexity. Our software is tailor-made for modern digital 
            product teams. 
          </p>
        </div>
        <div className='whats-diff-content'>
          <div className='whats-diff-item'>
            <div className='item-number'>01</div>
            <div className='item-title'>Track company-wide progress</div>
            <div className='item-text'>
                See how your day-to-day tasks fit into the wider vision. Go from 
                tracking progress at the milestone level all the way done to the 
                smallest of details. Never lose sight of the bigger picture again.
            </div>
          </div>
          <div className='whats-diff-item'>
            <div className='item-number'>02</div>
            <div className='item-title'>Advanced built-in reports</div>
            <div className='item-text'>
              Set internal delivery estimates and track progress toward company 
              goals. Our customisable dashboard helps you build out the reports 
              you need to keep key stakeholders informed.
            </div>
          </div>
          <div className='whats-diff-item'>
            <div className='item-number'>03</div>
            <div className='item-title'>Everything you need in one place</div>
            <div className='item-text'>
              Stop jumping from one service to another to communicate, store files, 
              track tasks and share documents. Manage offers an all-in-one team 
              productivity solution.
            </div>
          </div>
        </div>
      </section>
      <section className='testimmonials-section'>
        <h1 className='testimonials-title'>What they’ve said</h1>
        <Swiper
          slidesPerView={2.7}
          spaceBetween={30}
          initialSlide={1}
          centeredSlides={true}
          style={{overflow: "visible"}}
        >
          <SwiperSlide className='testimonial-item'>
            <img className='avatar' src='/images/avatar-anisha.png'></img>
            <h2 className='name'>Anisha Li</h2>
            <p className='text'>
              “Manage has supercharged our team’s workflow. The ability to maintain 
              visibility on larger milestones at all times keeps everyone motivated.”
            </p>
          </SwiperSlide>
          <SwiperSlide className='testimonial-item'>
            <img className='avatar' src='/images/avatar-ali.png'></img>
            <h2 className='name'>Ali Bravo</h2>
            <p className='text'>
              “We have been able to cancel so many other subscriptions since using 
              Manage. There is no more cross-channel confusion and everyone is much 
              more focused.”
            </p>
          </SwiperSlide>
          <SwiperSlide className='testimonial-item'>
            <img className='avatar' src='/images/avatar-richard.png'></img>
            <h2 className='name'>Richard Watts</h2>
            <p className='text'>
              “Manage allows us to provide structure and process. It keeps us organized 
              and focused. I can’t stop recommending them to everyone I talk to!”
            </p>
          </SwiperSlide>
          <SwiperSlide className='testimonial-item'>
            <img className='avatar' src='/images/avatar-shanai.png'></img>
            <h2 className='name'>Shanai Gough</h2>
            <p className='text'>
              “Their software allows us to track, manage and collaborate on our projects 
              from anywhere. It keeps the whole team in-sync without being intrusive.”
            </p>
          </SwiperSlide>
        </Swiper>
        <button className='get-started-btn'>Get Started</button>
      </section>
      <section className='simplify-section'>
        <h1 className='simplify-title'>Simplify how your team works today.</h1>
        <button className='get-started-btn simplify-btn'>Get Started</button>
      </section>
      <footer>
        <div className='footer-content'>

          <div className='contacts'>
            <img className='logo' src='/images/logo.svg'></img>
            <div className='socials'>

            </div>
          </div>
          <div className='footer-links'>
            <a>Home</a>
            <a>Pricing</a>
            <a>Products</a>
            <a>About Us</a>
          </div>
          <div className='footer-links'>
            <a>Careers</a>
            <a>Community</a>
            <a>Privacy Policy</a>
          </div>
          <div className='copyright'>
            <div className='email-input-wrapper'>
              <form onSubmit={handleSubmit}>

                <input className='email-input' type='text' placeholder='Updates in your inbox…'></input>
                <button className='submit' type='submit'>Go</button>
              </form>
              <p className='copyright-text'>Copyright 2020. All Rights Reserved</p>
            </div>
          </div>
        </div>
        <div className="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
          Coded by <a href="#">Your Name Here</a>.
        </div>
      </footer>
  

  
  
    </>
  )
}

export default App
