import{
  BrowserRouter as Router,
  Routes,
  Route,
}from "react-router-dom";
import Login from'./views/Login.jsx';
import Home from'./views/Home.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/Login' element={<Login/>}/>
  <Route path='/' element={<Home/>}/>
      </Routes>
    </Router>
  );
}

export default App;