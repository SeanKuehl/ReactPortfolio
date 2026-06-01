
import '../Style/Experience.css';
import '../App.css';
import { defaultTab, openRole } from '../Components/ExperienceTabScript.js'
import React, { useEffect } from 'react'


 

function Experience(props) {
  


  

  

  return (
    <div>
      <h2 className="SectionHeader"><b className="SectionBrackets">&lt;</b> Focus Areas <b className="SectionBrackets">&gt;</b></h2>
      
      
      
      
      <p className="ExperienceText">I can help you with</p>
      <ul className="FocusList">
        <li>Tactics</li>
        <li>Avoiding and Punishing Blunders</li>
        <li>Tournament Notation and Best Practices</li>
        <li>Endgames</li>
        <li>Learning Openings</li>
        <li>Chess Principals</li>
      </ul>
      


      

      <hr className="SectionDivider"></hr>
    </div>



  );
  
}



export default Experience;
