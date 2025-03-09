import React from "react";
import video from "/videos/shooter.mp4"
import { useState } from "react";

function Project03(){

  const [imgPath, setImgPath] = useState("code1");

  const handleInput = (e) => {
    setImgPath(e.target.id);
    const button = document.getElementById(e.target.id);
    const btns = document.querySelectorAll('.dot')
    btns.forEach(btn =>{
      btn.style.backgroundColor = '#ecf3f9';
    })
    button.style.backgroundColor = '#536673';
  }

  return(
  <div className="container proj-container">
        <h1 className="proj-title">3D Shooter</h1>
        <h2 className="center-subtitle">Prototype</h2>
        <video controls loop autoPlay muted>
          <source src={video} type="video/mp4"></source>
        </video>
        <h2 className="proj-subtitle">Introduction</h2>
        <p className="proj-paragraph">This prototype incorporates key mechanics essential for shooter games. The weapon System, the enemy AI, and the possibility to interact with other 3D objects deliver a complete experience.</p>
        <h2 className="proj-subtitle">Development Process</h2>
        <h4>Player and Weapon mechanics</h4>
        <div className="proj01-container">
          <div className="proj-img-container">
              <img className="proj-img proj03-img" src="../images/weapons.png" 
              alt="image with code for the weapon instantiation" ></img>
          </div>
          <div>
            <ul>
              <li>developed a smooth and responsive first-person movement system using the Character Controller component</li>
              <li>Implemented a flexible weapon system that makes it possible to add weapons and switch between them easily. This is achieved with a for loop that instantiate all the weapon prefabs from the given array. A foreach loop hides all weapons, then the system activates only the selected one based on the templndex variable.</li>
              <li>Each weapon has a different rate of fire, and amount of ammunition available that can be reloaded</li>
            </ul>
          </div>
        </div>
        <h4>Weapon info</h4>
        <div className="proj03-container">
          <div>
            <ul>
              <li>Utilized UnityEngine.Events to update the UI with the selected weapon information</li>
            </ul>
          </div>
          <div className="proj-imgs-div">
            <img className="proj-img" src="../images/weapon_info01.png" 
            alt="image of the weapon info code" ></img>
            <img className="proj-img" src="../images/weapon_info02.png" 
            alt="image of the weapon info code"></img>
          </div>
        </div>
        <h4>Enemy's AI</h4>
        <div id="slider-div">
            <div>
              <ul>
                <li>Defined a predefined movement path and rotation</li>
                <li>Implemented a field of view that detects and reacts when the player is seen. It uses a Physics.OverlapSphere to detect objects within a specified radius around the enemy. Then the system checks if the detected object is within the enemy's field of view determined by a specific angle and ensures there are no obstacles in the way</li>
                <li>Utilized a IEnumerator Coroutine for the field of view check instead of the Update function to improve performance</li>
                <li>Incorporated a damage system that responses according to the weapon used to shoot</li>
              </ul>
            </div>
            <div className="slider">
              <div className="slider-imgs">
                <img className="img" src={`../images/${imgPath}.png`} ></img>
              </div>
              <div className="dots">
                <button id="code1" className="dot" onClick={handleInput}></button>
                <button id="code2" className="dot" onClick={handleInput}></button>
                <button id="code3" className="dot" onClick={handleInput}></button>
              </div>
            </div>
          <div className="proj-img-container">
          </div>
        </div>
        <h4>Level Passed/Failed Event</h4>
        <div className="proj03-container">
          <ul>
            <li>Developed an opening door system with UnityEngine.Events and UI elements. It evaluates if the code entered is correct or not. If it isn't the screen shows an error message. If it is the door is opened and the level is completed</li>
            <li>Added a message that appears when the player is close to the panel to give an instruction of how to interact with it. It was also developed with a Physics.OverlapSphere. The message is activated when the player enters the sphere</li>
            <li>Implemented a timer and alarm sound that appear when the enemy sees the player, adding tension. If the timer reaches zero the level is over</li>
          </ul>
          <div className="proj-imgs-div">
            <img className="proj-img proj03-img" src="../images/Interact.png" 
            alt="interacting system" ></img>
            <img className="proj-img proj03-img" src="../images/timer02.png" 
            alt="code for the timer" ></img>
            <img className="proj-img proj03-img" src="../images/timer.png" 
            alt="code for the timer" ></img>
          </div>
        </div>
        <h2>What I learned</h2>
        <p className="proj-paragraph">Initially, the goal of this project was to develop a weapon system. However, I continued adding mechanics, which led me to the discovery of several useful techniques. I reached a better understanding of Unity Events. I focused on organization, ensuring each script had a clear purpose and avoiding overly lengthy scripts.
        The most challenging part of this project was developing the enemy’s field of view. I used an online tool to visualize the 3D vectors in order to better understand their direction and angles.
        Finally, I would like to mention that when I was writing the code for the buttons I felt like I was working on a website with javascript. It showed me how knowledge from different fields can be leveraged to find solutions and enhance results.</p>
    </div>
  )
}

export default Project03