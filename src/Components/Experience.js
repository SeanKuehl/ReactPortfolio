
import '../Style/Experience.css';
import '../App.css';
import { defaultTab, openRole } from '../Components/ExperienceTabScript.js'
import React, { useEffect } from 'react'


 

function Experience(props) {
  


  useEffect(() => {
    //open one of the tabs by default. It needs to be here so the component it tries to access is rendered when it looks for it
    defaultTab();
  },

  [])

  return (
    <div>
      <h2 className="SectionHeader"><b className="SectionBrackets">&lt;</b> Experience <b className="SectionBrackets">&gt;</b></h2>
      
      <div class="tab">
        <button className="tablinks" onClick={event=>openRole(event, 'focus')} id="defaultOpen">Focus21</button>
        <button className="tablinks" onClick={event=>openRole(event, 'eagle')}>Eagle Business Software</button>
        <button className="tablinks" onClick={event=>openRole(event, 'stackpole')}>Stackpole International</button>
      </div>


      <div id="focus" className="MyTabs">
        <h4 className="ExperienceHeader">Software Developer Co-op at Focus21(May-Aug 2022)</h4>

        <p className="ExperienceText">At Focus21 I worked on a completely remote team following Agile development sprints. We used React Native to build a mobile
          application according to UI prototypes based on client requirements. We used Android Studio and Xcode to test our application
          on different mobile platforms.
        </p>
      </div>

      <div id="eagle" className="MyTabs">
        <h4 className="ExperienceHeader">Software Developer Co-op at Eagle Business Software(May-Sept 2023)</h4>

        <p className="ExperienceText">At Eagle Business Software I used MSSQL to query ERP data and produce data visualizations. I sat in on client calls and worked with Vue.js to create
          an application meant to help people arrange transportation in the local menonite community.
        </p>
      </div>

      <div id="stackpole" className="MyTabs">
        <h4 className="ExperienceHeader">Smart Manufacturing Co-op Student at Stackpole International(Sept-Dec 2023)</h4>

        <p className="ExperienceText">At Stackpole International I worked with Python, Django and Javascript to maintain and expand their internal manufacturing data visualization app.
          I recieved training for and worked partially in a manufacturing environment and learned a lot about IOT devices used within the plant.
        </p>
      </div>

      

      <hr className="SectionDivider"></hr>
    </div>



  );
  
}



export default Experience;
