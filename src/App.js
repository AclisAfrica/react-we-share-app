import{
  HashRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import Login from'./views/Login.jsx';
import Home from'./views/Home.jsx';
import Passengers from'./views/Passengers.jsx';
import DropOff from'./views/DropOff';
import Pickups from'./views/Pickups';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
  <Route path='/' element={<Home/>}/>
    <Route path='/Passengers' element={<Passengers/>}/>
     <Route path='/DropOff' element={<DropOff/>}/>
            <Route path='/Pickups' element={<Pickups/>}/>
      </Routes>
    </Router>
  );
}

export default App;