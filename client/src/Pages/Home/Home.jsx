import React from 'react'
import "./home.css"
export default function Home() {
  return (
    <div className='body-box'><>
      <div className='full-section'>
        <header>CP-Rankers</header>
        <h3 class="claim">The <span>Way</span> to do Coding.</h3>
        <h4 className="desc">
          "Unleash your coding prowess, craft digital wonders, and shape the future. <br /> Embrace innovation, empower creativity, and conquer the world of code."
        </h4>
      </div>
      <div className='full-section'>
        <h1 style={{ margin: "20px" }}>Extra Ordinary Features</h1>
        <div className="feature-box" style={{ margin: "40px" }}>
          <div className='single-home-feature'>Contest Alert</div>
          <div className='single-home-feature'>Developer Discussion</div>
          <div className='single-home-feature'>DSAlgo Discussion</div>
          <div className='single-home-feature'>MERN STACK</div>
          <div className='single-home-feature'>Mail API</div>
          <div className='single-home-feature'>DEVELOPMENT</div>
        </div>
      </div>
    </>
    </div>
  )
}
