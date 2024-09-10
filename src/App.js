
import './App.css';
import './Components/HeaderAndIntro'
import HeaderAndIntro from './Components/HeaderAndIntro';
import AboutMe from './Components/AboutMe'
import SoftwareKnowledge from './Components/SoftwareKnowledge'
import Experience from './Components/Experience'
import ContactAndResume from './Components/ContactAndResume'





//<img src={logo} className="App-logo" alt="logo" />

function App() {

  
  const introMessage = "Hey there, I'm Sean Kuehl. I'm a Software Developer near the Waterloo area that likes new challenges, learning emerging technologies and making the occaisonal hobby game."

  return (
    <div className="App">
      <HeaderAndIntro className="BeforeScroll" name="{ Sean Kuehl }" message={introMessage}></HeaderAndIntro>
      <AboutMe className="BeforeScroll"></AboutMe>
      <SoftwareKnowledge className="BeforeScroll"></SoftwareKnowledge>
      <Experience className="BeforeScroll"></Experience>
      <ContactAndResume className="BeforeScroll"></ContactAndResume>
    </div>
  );
}

export default App;
