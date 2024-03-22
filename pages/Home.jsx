import React from 'react'
import { Link } from 'react-router-dom'

export default function Home () {
  return (
    <div className="home-container">
      <main className="home-main-container">
        <h1 className="home-main-title">You got the travel plans, we got the travel vans.</h1>
        <h3 className="home-main-description">Add adventure to your life by joining the #vanlife movement. Rent the perfect van to make your perfect road trip.</h3>
        <Link to="/vans" className="home-main-btn">Find your van</Link>
      </main>
    </div>
  )
}