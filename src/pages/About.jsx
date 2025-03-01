import React from 'react'
import { Link } from 'react-router-dom'

function About() {
  return (
    <div className='container'>
        <div className='about-first-div'>
          <img src='./images/me.jpg' alt='van' className='about-img'/>
          <h1 className='about-title'>About me</h1>
          <p className='about-first-paragraph'>Here you will find my current skills, and a look at my journey and love for technology</p>
        </div>
        <div className='about-div'>
          <div className='about-subdiv'>
          <h2 className='about-subtitle'>A little about me</h2>
            <p className='about-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quae modi, fugiat dolorem beatae velit distinctio ullam consequatur doloribus voluptatum ipsa illum alias sit voluptatem doloremque! Doloremque repudiandae tenetur rerum!</p>
            <p className='about-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quae modi, fugiat dolorem beatae velit distinctio ullam consequatur doloribus voluptatum ipsa illum alias sit voluptatem doloremque! Doloremque repudiandae tenetur rerum!</p>
            <p className='about-paragraph'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatibus quae modi, fugiat dolorem beatae velit distinctio ullam consequatur doloribus voluptatum ipsa illum alias sit voluptatem doloremque! Doloremque repudiandae tenetur rerum!</p>
          </div>
          <div className='about-subdiv'>
            <h2 className='about-subtitle'>My skills</h2>
            <div className='skills-div'>
              <h4 className='skill'>C#</h4>
              <h4 className='skill'>Unity</h4>
              <h4 className='skill'>Godot</h4>
              <h4 className='skill'>Blender</h4>
              <h4 className='skill'>Adobe Animate</h4>
              <h4 className='skill'>React</h4>
              <h4 className='skill'>JavaScript</h4>
              <h4 className='skill'>GitHub</h4>
              <h4 className='skill'>git</h4>
              <h4 className='skill'>Terminal</h4>
            </div>

          </div>
      </div>
    </div>
  )
}
export default About