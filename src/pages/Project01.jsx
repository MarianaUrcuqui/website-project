import React from "react";
import { Link } from 'react-router-dom'
import video from '/videos/to-the-sea.mp4'

function Project01(){
  return(
    <div className="container proj-container">
      <h1 className="proj-title">To the Sea</h1>
      <h2 className="center-subtitle">Video Game</h2>
      <video controls loop autoPlay muted>
        <source src={video} type="video/mp4"></source>
      </video>
      <h2 className="proj-subtitle">Introduction</h2>
      <p className="proj-paragraph">This project started as an assignment for a SENA (National Training Service) course. While I had worked on prototypes before, this was my first time building a complete video game. It was inspired by a lateral runner game I used to play when I was a kid—Rogue Soul—however, I also wanted to include fighting game mechanics. My goal was to develop every aspect independently to gain a deeper understanding of the game development process.</p>
      <h2 className="proj-subtitle">Story</h2>
      <p className="proj-paragraph">The protagonist is an adventurous cat determined to reach the port in time to board a ship and explore the world. Along the way he has to cross towns and cities, encountering aggressive dog and rival cats that stand in his path.</p>
      <h2 className="proj-subtitle">Development Process</h2>
      <p className="proj-paragraph">I took a mechanics-first approach, focusing on implementing core gameplay before designing assets and animations. This allowed me to ensure smooth integration between programming and art. The process was structured as follows:</p>
      <ol>
        <li><h4>Core Mechanics Implementation: </h4>developed player movement, combat, and enemy AI using placeholder assets</li>
        <li><h4>Asset creation: </h4>Designed characters, animations, and UI elements, ensuring compatibility with the mechanics—except for the health bar, which was sourced from <Link target="_blank" to='https://www.youtube.com/@Brackeys'>Brackeys</Link>.</li>
        <li><h4>Integration and testing: </h4>Implemented animations with Animator Controller and sprite sheets, and fixed bugs for a polished experience</li>
      </ol>
      <h2 className="proj-subtitle">Key Mechanics</h2>
      <h4>Player Behavior and combat</h4>
      <div className="proj01-container">
        <div>
          <ul>
            <li>Used a boolean variable to track when the player is engaged in combat, altering movement behavior accordingly</li>
            <li>Implemented a special attack that became available only during boss fights</li>
          </ul>
        </div>
      </div>
      <h4>Boss AI and Attack system</h4>
      <div className="proj01-container">
        <div>
          <ul>
            <li>Used Physics.Raycast to find the player's position relative to the boss (IsPlayerOnRightSide), adjusting enemy movement dynamically</li>
            <li>Utilized an IEnumerator coroutine to introduce brief delays, allowing the player to reposition before the boss attacks</li>
            <li>Designed an attack collider that activates for a second during attacks</li>
          </ul>
        </div>
      </div>
      <h4>Platforming System</h4>
      <div className="proj01-container">
        <ul>
          <li>Implemented dynamic collision toggling: The IsTrigger property changes to false when the player jumps high enough to touch the roof with his feet</li>
        </ul>
      </div>
      <h4>Flying Enemy Behavior</h4>
      <div className="proj01-container">
        <div className="proj-img-container">
            <img className="proj-img proj01-img" src="images/hen.png" 
            alt="Platforming system code" ></img>
        </div>
        <div>
          <ul>
            <li>Used the Mathf.Pow() function to create a parabolic trajectory for flying enemies</li>
            <li>Implemented a destruction system to remove enemies post-attack, optimizing performance and preventing unnecessary scene clutter</li>
          </ul>
        </div> 
      </div>
      <h2>What I learned</h2>
      <p className="proj-paragraph">This experience led me to find solutions in multiple areas not just programming. I had to design and animate the characters in such a way that could work with what I was coding and planning to code. Though I worked solo, I understood how important it is to communicate with your peers in order to optimize time and prevent future complications. 
      Seeing my efforts come to life—such as when the hen's animation played perfectly in sync with its flight mechanic—was incredibly rewarding (and funny).</p>
  </div>
  )
}

export default Project01