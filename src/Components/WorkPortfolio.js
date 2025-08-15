
import '../Style/WorkPortfolio.css';
import '../App.css';

import ElmiraStoriesPic from "../assets/images/ElmiraStoriesPic.png"



 

function WorkPortfolio(props) {
  


  

  return (
    <div>
      <h2 className="SectionHeader"><b className="SectionBrackets">&lt;</b> Portfolio <b className="SectionBrackets">&gt;</b></h2>
      
      <div className="PortfolioGrid">
        <a className="PortfolioPiece" href="https://elmira-stories-production.up.railway.app/">
          <img src={ElmiraStoriesPic} width="300" height="200" alt="Elmira Stories, a website I made"></img>
        </a>
      </div>

      

      <hr className="SectionDivider"></hr>
    </div>



  );
  
}



export default WorkPortfolio;
