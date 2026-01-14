import { BrowserRouter, Routes ,Route} from 'react-router-dom';
import './App.css';
import  Navbar  from './components/Navbar';
import Home from './components/Home';
import Auth from './components/Auth';
import Login from './components/Login';
import Signup from './components/Signup';


function App() {
  return (
    <BrowserRouter>
      <Navbar/>
    <div className="App">
      <Routes>  
        <Route path="/" element= {<Auth/>} /> 
        <Route path="/login" element= {<Login/>} /> 
        <Route path="/signup" element= {<Signup/>} /> 
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
