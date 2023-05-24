import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Merchantsdata from './Components/Merchantsdata';
import MerchantsUserData from './Components/MerchantsUserData';
import FaildUser from './Components/FaildUser';
import AcceptUser from './Components/AcceptUser';
import PayoutUser from './Components/PayoutUser';
import Register from './Components/Register';
import Login from './Components/Login';
function App() {
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={< Home />} />
        <Route exact path="/Merchantsdata" element={< Merchantsdata />} />
        <Route exact path="/MerchantsUserData" element={< MerchantsUserData />} />
        <Route exact path="/FaildUser" element={< FaildUser />} />
        <Route exact path="/AcceptUser" element={< AcceptUser />} />
        <Route exact path="/PayoutUser" element={< PayoutUser />} />
        <Route exact path="/Register" element={< Register />} />
        <Route exact path="/Login" element={< Login />} />
      </Routes>
    </div>
  );
}

export default App;
