
import './App.css';
import './Components/HeaderAndIntro'
import HeaderAndIntro from './Components/HeaderAndIntro';
import AboutMe from './Components/AboutMe'
import WorkPortfolio from './Components/WorkPortfolio'
import Experience from './Components/Experience'
import ContactAndResume from './Components/ContactAndResume'




function App() {

  
  const introMessage = "Hey there, I'm Sean Kuehl. I'm a Freelance Web Developer living in the Calgary area who's passionate about helping small businesses and non-profits reach their full potential."

  return (
    <div className="App">
      <HeaderAndIntro name="{ Sean Kuehl }" message={introMessage}></HeaderAndIntro>
      <AboutMe></AboutMe>
      <WorkPortfolio></WorkPortfolio>
      <Experience></Experience>
      <ContactAndResume></ContactAndResume>
    </div>
  );
}

export default App;
