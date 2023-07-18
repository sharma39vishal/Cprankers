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
        <div className="container" style={{ margin: "40px" }}>
          <div>Contest Alert</div>
          <div>Developer Discussion</div>
          <div>DSAlgo Discussion</div>
          <div>Guidance</div>
          <div>CodeChef</div>
          <div>Codeforces</div>
        </div>
      </div>
    </>
    </div>
  )
}
