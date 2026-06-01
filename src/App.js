
import './App.css';
import './Components/HeaderAndIntro'
import HeaderAndIntro from './Components/HeaderAndIntro';
import AboutMe from './Components/AboutMe'
import WorkPortfolio from './Components/WorkPortfolio'
import Experience from './Components/Experience'
import ContactAndResume from './Components/ContactAndResume'




function App() {

  
  const introMessage = "Hey there, I'm Sean Kuehl. I'm a entry level chess tutor living in the Calgary area who's passionate about helping make chess not just fun to play, but improve at too."

  return (
    <div className="App">
      <HeaderAndIntro name="Sean Kuehl" message={introMessage}></HeaderAndIntro>
      <AboutMe></AboutMe>
      <WorkPortfolio></WorkPortfolio>
      <Experience></Experience>
      <ContactAndResume></ContactAndResume>
    </div>
  );
}

export default App;
