import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='container'>
        <div className='about-first-div'>
          <img src='./images/me.jpg' alt='portrait' className='about-img'/>
          <h1 className='about-title'>About me</h1>
          <p className='about-first-paragraph'>Here you will find my current skills, and a look at my journey and love for technology</p>
        </div>
        <div className='about-div'>
          <div className='about-subdiv'>
          <h2 className='about-subtitle'>A little about me</h2>
            <p className='about-paragraph'>Hey, I'm Mariana, a self-taught programmer with a passion for game development, arts, and sports. Currently, I'm expanding my expertise in gameplay programming, preparing for my university studies. With a background in front-end development, I bring different viewpoints and solutions to every problem and project. Eager to learn new development methods and acquire new skills to enhance my work.</p>
          </div>
          <div className='about-subdiv'>
            <h2 className='about-subtitle'>My skills</h2>
            <div className='skills-div'>
              <h4 className='skill'>C#</h4>
              <h4 className='skill'>Unity</h4>
              <h4 className='skill'>Godot</h4>
              <h4 className='skill'>GDScript</h4>
              <h4 className='skill'>Blender</h4>
              <h4 className='skill'>Adobe Animate</h4>
              <h4 className='skill'>React</h4>
              <h4 className='skill'>JavaScript</h4>
              <h4 className='skill'>GitHub</h4>
              <h4 className='skill'>git</h4>
              <h4 className='skill'>Terminal</h4>
              <h4 className='skill'>HTML</h4>
              <h4 className='skill'>CSS</h4>
            </div>

          </div>
      </div>
    </div>
  )
}
export default About