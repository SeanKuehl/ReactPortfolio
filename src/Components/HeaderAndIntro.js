
import '../Style/HeaderAndIntro.css';
import '../App.css';
//<img src={logo} className="App-logo" alt="logo" />

function HeaderAndIntro(props) {
  return (
    <div className="HeaderDiv">
      <h1 className="glow">{props.name}</h1>
      <h3 className="intro">{props.message}</h3>
      <hr className="SectionDivider"></hr>
      <br></br>
      <br></br>
    </div>
  );
}

export default HeaderAndIntro;
