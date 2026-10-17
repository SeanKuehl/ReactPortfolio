
import './App.css';
import './Components/HeaderAndIntro'
import HeaderAndIntro from './Components/HeaderAndIntro';
import AboutMe from './Components/AboutMe'
import WorkPortfolio from './Components/WorkPortfolio'
import Experience from './Components/Experience'
import ContactAndResume from './Components/ContactAndResume'




function App() {

  
  const introMessage = "Hey there, I'm Sean Kuehl. I'm a chess tutor for emerging (0-1500) players living in Calgary who's passionate about helping make chess not just fun to play, but improve at too."

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
