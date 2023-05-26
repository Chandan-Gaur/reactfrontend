import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./Components/Home/Home";
import Merchantsdata from "./Components/Merchantsdata";
import MerchantsUserData from "./Components/MerchantsUserData";
import FaildUser from "./Components/FaildUser";
import AcceptUser from "./Components/AcceptUser";
import PayoutUser from "./Components/PayoutUser";
import Register from "./Components/Register";
import Login from "./Components/Login";
import "bootstrap/dist/css/bootstrap.min.css";
import { RequireAuth } from "react-auth-kit";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route
          exact
          path={"/"}
          element={
            <RequireAuth loginPath={"/Login"}>
              <Home />
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/MerchantsUserData"
          element={
            <RequireAuth loginPath={"/Login"}>
              {" "}
              <MerchantsUserData />{" "}
            </RequireAuth>
          }
        />
        <Route
          exact
          path="/Merchantsdata"
          element={
            <RequireAuth loginPath={"/Login"}>
              {" "}
              <Merchantsdata />
            </RequireAuth>
          }
        />
        <Route exact path="/FaildUser" element={ <RequireAuth loginPath={"/Login"}> <FaildUser /> </RequireAuth>} />
        <Route exact path="/AcceptUser" element={ <RequireAuth loginPath={"/Login"}> <AcceptUser /> </RequireAuth>} />
        <Route exact path="/PayoutUser" element={ <RequireAuth loginPath={"/Login"}> <PayoutUser /> </RequireAuth>} />
        <Route exact path="/Register" element={<Register />} />
        <Route exact path="/Login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
