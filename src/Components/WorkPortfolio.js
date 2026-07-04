
import '../Style/WorkPortfolio.css';
import '../App.css';


import CFC_Logo from "../assets/images/CFC_logo.png"
import FIDE_Logo from "../assets/images/FIDE_logo.png"
import Lichess_Logo from "../assets/images/Lichess_logo.png"
import Chesscom_Logo from "../assets/images/chess-com.jpg"

 

function WorkPortfolio(props) {
  


  

  return (
    <div>
      <h2 className="SectionHeader"><b className="SectionBrackets">&lt;</b> Portfolio <b className="SectionBrackets">&gt;</b></h2>
      
      <div>
        <p className="AboutMeText">I'm currently 1699 CFC, 1876 FIDE, 1900 Chess.com and over 2000 on Lichess Classical</p>

        <br></br>

        <div className="PortfolioGrid">
        <a href="https://www.chess.ca/en/ratings/p/sr/?fn=Sean&ln=Kuehl"> 
        <img className="PortfolioPiece" src={CFC_Logo} alt="The logo of the Chess Federation of Canada" width="100" height="100"></img>
        </a>

        <a href="https://ratings.fide.com/profile/2681781">
        <img className="PortfolioPiece" src={FIDE_Logo} alt="The logo of FIDE" width="100" height="100"></img>
        </a>

        <a href="https://lichess.org/@/BenFinegold129">
        <img className="PortfolioPiece" src={Lichess_Logo} alt="The logo of Lichess" width="100" height="100"></img>
        </a>

        <a href="https://www.chess.com/member/seanliamkuehl">
        <img className="PortfolioPiece" src={Chesscom_Logo} alt="The logo of Chess.com" width="100" height="100"></img>
        </a>

        </div>
        
        
        
      </div>

      

      <hr className="SectionDivider"></hr>
    </div>



  );
  
}



export default WorkPortfolio;
