import React from 'react'
import { Link } from 'react-router-dom'


export default function About () {
  return (
    <div className="home-container">
      <main className="about-main-container">
        <img src="https://esbit.de/wp-content/uploads/2020/05/VanLife-tommy-lisbin-unsplash.jpg" alt="Guy on a Van" className="about-img"></img>
        <div className="about-main-inner">
          <h1 className="about-main-title">
            Don’t squeeze in a sedan when you could relax in a van.
          </h1>
          <h2 className="about-main-description">
            Our mission is to enliven your road trip with the perfect travel van rental. Our vans are recertified before each trip to ensure your travel plans can go off without a hitch.
            (Hitch costs extra 😉)
          </h2>
          <h2 className="about-main-description">
          Our team is full of vanlife enthusiasts who know firsthand the magic of touring the world on 4 wheels.
          </h2>
          <div className="about-main-bottom-container">
            <h1 className="about-main-bottom-text">
              Your destination is waiting. <span className="new-line">Your van is ready.</span>
            </h1>
            <Link to="/vans" className="about-btn">Explore our vans</Link>
          </div>
        </div>
      </main>
    </div>
  )
}