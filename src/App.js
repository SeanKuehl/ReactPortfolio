
import './App.css';
import './Components/HeaderAndIntro'
import HeaderAndIntro from './Components/HeaderAndIntro';
import AboutMe from './Components/AboutMe'
import SoftwareKnowledge from './Components/SoftwareKnowledge'
import Experience from './Components/Experience'
import ContactAndResume from './Components/ContactAndResume'




function App() {

  
  const introMessage = "Hey there, I'm Sean Kuehl. I'm a Software Developer near the Waterloo area that likes new challenges, learning emerging technologies and making the occaisonal hobby game."

  return (
    <div className="App">
      <HeaderAndIntro name="{ Sean Kuehl }" message={introMessage}></HeaderAndIntro>
      <AboutMe></AboutMe>
      <SoftwareKnowledge></SoftwareKnowledge>
      <Experience></Experience>
      <ContactAndResume></ContactAndResume>
    </div>
  );
}

export default App;
