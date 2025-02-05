// import './App.css'; 
import Navbar from './navbar.js'; 
import Home from './home.js'; 
function App() { 
  return ( 
    <div className="App"> 
      <Navbar/> 
      <div className="content hello-cricket-fans">Hello Cricket fans</div><Home /> 
    </div> 
  ); 
} 
export default App;