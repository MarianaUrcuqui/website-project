import React from 'react'
import { Link } from 'react-router-dom'
import video01 from '/videos/to-the-sea.mp4'
import video02 from '/videos/gc.mp4'
import video03 from '/videos/shooter.mp4'

function Home() {
  return (
    <>   
      <div className='home-div container'>
        <h1 className='home-title'>Hey, I'm Mariana Urcuqui</h1>
        <p className='home-paragraph'>And I made this website from scratch to show you my projects and how excited I am to dive into the world of game development</p>
      </div>
      <h1 className='projects-title'>My Projects</h1>
      <div className='projects-div'>
        <Link to='projects'>
          <section className='project-preview'>
            <video loop autoPlay muted className='proj-preview-vid'>
              <source src={video01} type='video/mp4'></source>
              Your browser does not support html5 videos
            </video>
            <h3>To the Sea - videogame</h3>
            <p><span>Role: </span>gameplay programmer, artist, animator, game designer <br/>
                <span>Time frame: </span>5 months <br/>
                <span>Engine: </span>Unity (C#)</p>
          </section>
        </Link>
        <Link to='projects/project02'>
          <section className='project-preview'>
            <video loop autoPlay muted className='proj-preview-vid'>
              <source src={video02} type='video/mp4'></source>
              Your browser does not support html5 videos
            </video>
            <h3>The Coder Path - Game Concept</h3>
            <p><span>Role: </span>game designer, gameplay programmer<br/>
                <span>Time frame: </span>1 month<br/>
                <span>Engine: </span>Godot (GDScript)</p>
          </section>
        </Link>
        <Link to='projects/project03'>
          <section className='project-preview'>
            <video loop autoPlay muted className='proj-preview-vid'>
              <source src={video03} type='video/mp4'></source>
              Your browser does not support html5 videos
            </video>
            <h3>3D Shooter - Prototype</h3>
            <p><span>Role: </span>gameplay programmer<br/>
                <span>Time frame: </span>3 weeks<br/>
                <span>Engine: </span>Unity (C#)</p>
          </section>
        </Link>
      </div>
    </>
  )
}

export default Home