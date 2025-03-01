import React from "react";

function Project02(){
  return(
    <div className="container proj-container">
      <h1 className="proj-title">The Coder Path</h1>
      <h2 className="proj-subtitle">Game concept</h2>
      <p className="proj-paragraph">The main idea of this first person puzzle title is to help new coders with their first steps. Programming is a broad field: video games, websites, AI, security software, etc. That's why it is important to choose a specialization in order to tailor the learning process. This project won't be able to cover all these subjects for now, so this document will focus on one of them and explain the game mechanics for this specific path. </p>
      <h3 className="proj-subtitle">Front-end path</h3>
      <p className="proj-paragraph">The video game will have place in a colorful and open building. The player will go through numerous rooms while solving code puzzles. In the first levels he will receive a very basic idea of how code works. He will have a computer with an IDE—similar to Visual Studio Code—which he will use to manipulate the functioning of objects, robots, and even the building itself. </p>
      <p className="proj-paragraph">Since the principal objective is to introduce the basics of Front-end, files will use HTML/CSS and JavaScript syntax, therefore, the player won't make progress if he doesn't write correctly.</p>
      <p className="proj-paragraph">In level 1 he will see a door that must be open so as to pass the level, however, not by pressing a button, but by coding. He will get close to the door, interact with it to access files and modify them with the IDE.</p>
      <div className="proj-imgs-div">
        <div className="proj-img-container">
          <img className="proj-img" src="../images/Closed_door.png" 
          alt="Closed door in my Godot project" ></img>
          <p className="img-caption">Closed door</p>
        </div>
        <div className="proj-img-container">
          <img className="proj-img" src="../images/Unmodified_code.png" 
          alt="Basic representation of an IDE with some code that the player must modify" ></img>
          <p className="img-caption">Unmodified code</p>
        </div>
        <div className="proj-img-container">
          <img className="proj-img" src="../images/Modified_code.png" 
          alt="The code already modified" ></img>
          <p className="img-caption">Modified code</p>
        </div>
        <div className="proj-img-container">
          <img className="proj-img" src="../images/Opened_door.png" 
          alt="The previous door, but now opened" ></img>
          <p className="img-caption">Opened door</p>
        </div>
      </div>
      <p className="proj-paragraph">In the next levels the player will create JavaScript files from scratch with more complex functions. He will learn how to manage different types of files and how they connect. The learning curve with JavaScript will be very low, in order not to overwhelm him. </p>
      <p className="proj-paragraph">To create a more realistic experience, there won't be a unique correct answer. While coding there are always multiple ways to solve a problem and that's what the game will try to replicate. For instance, if the player tries to open a door by changing its width with CSS, that will also work. The application will leverage tools such as syntax parsers—regex for HTML/CSS— and lightweight JavaScript interpreters to ensure code executes correctly and safely.</p>
      <p className="proj-paragraph">The player will also use a system similar to Git. He won't be able to open the same file in different places unless he uploads it with Git. For instance, he might need a file from the previous room, but he can't take it with him. The solution would be to use Git commands, such as “git add”, “git commit”, and “git push”, to save the file and be able to use it in the next room—the images below illustrate this idea.</p>
      <div className="proj-imgs-div">
        <div className="proj-img-container">
          <img className="proj-img" src="../images/Git_idea.png" 
          alt="The player sees a robot using git on a computer"></img>
          <p className="img-caption">The player sees the robot secretly</p>
        </div>
        <div className="proj-img-container">
          <img className="proj-img" src="../images/Git_idea02.png" 
          alt="The robot uses git commands in the first room to save the file"></img>
          <p className="img-caption">The robot uses these commands in the first room</p>
        </div>
        <div className="proj-img-container">
          <img className="proj-img" src="../images/Git_idea03.png" 
          alt="In the second room the robot uses the pull command to access to file from the previous room"></img>
          <p className="img-caption">In the second room the robot uses this command to access to file from the previous room</p>
        </div>
        <div className="proj-img-container">
          <img className="proj-img" src="../images/Git_idea04.png" 
          alt="After that the robot gets access to the previous file"></img>
          <p className="img-caption">After seeing this the player will discover this new possibility</p>
        </div>
      </div>
      <p className="proj-paragraph">Likewise, commands like “git branch” will be necessary. One of the advanced levels will ask the player to modify a file, however, an alarm is triggered the moment he starts coding. To resolve this problem the player has to use “git pull” to copy the file's content, then “git branch new_branch” to create a new branch. There he will make the changes and finally he has to merge that branch with the original one. These kind of systems can be difficult to understand for beginners, that's why the game will teach players how to start through visual explanations and experimentation, rather than direct instructions. It is imperative to avoid the classic “Press here”, “Do this”, “Go there”, “Write this” phrases. Instead, the player will figure out how the system works on his own. For example, in a specific level a robot will use the system and the player will see the process. This way he will feel like he discovered its functioning. He won't feel like a little kid that has some instructions to follow. Given the case where the player gets stuck here, some clues will appear. Perhaps an audio from a speaker could give robots instructions, making it possible for the player to understand it better. Playtesting will be crucial for this part. Moreover, the commands won't look exactly the same as Git from the start to prevent that players get confused. They will learn key words first.</p>
      <h3 className="proj-subtitle">Technical design</h3>
      <p className="proj-paragraph">The game will be developed with Godot and its programming language GDScript. Since it is an open-source and free game engine it is more reliable for an indie developer, moreover, the possibility of modifying the engine's course code is a significant advantage for a programmer.</p>
      <p className="proj-paragraph">The graphics will be 3D low-poly, so that people with regular and not that powerful computers can play it without problems. Nodes such as “MeshInstance3D”, “CSDBox3D”, and “CollisionShape3D” can be useful to create the basic infrastructure of the building. However, Blender will be used for more complex modeling. Additionally, “CodeEdit” node will power the in-game IDE, with syntax highlighting for HTML/CSS/JS and auto-indentation.</p>
      <p className="proj-paragraph">Given that it is necessary a keyboard for coding the game will only run on computers—Windows or MacOS—initially.</p>
    </div>
  )
}

export default Project02