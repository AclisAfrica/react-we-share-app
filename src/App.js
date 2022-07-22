import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import Login from'./views/Login.jsx';
import Home from'./views/Home.jsx';
import Passengers from'./views/Passengers.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
  <Route path='/' element={<Home/>}/>
    <Route path='/Passengers' element={<Passengers/>}/>
      </Routes>
    </Router>
  );
}

export default App;