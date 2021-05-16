import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Reserva from "./pages/Reserva";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import habitaciones from "./pages/Habitaciones";
import {AuthContext} from "./helpers/AuthContext";
import {useState,useEffect} from "react";
import axios from 'axios';
import Habitaciones from './pages/Habitaciones';
import LoginMiReserva from './pages/LoginMiReserva';
import MiReserva from './pages/MiReserva';

function App() {

  const [authState, setAuthState] = useState({username:"", id:0, status: false,});

  useEffect(()=>{
    axios.get('http://localhost:3001/auth/auth',{ headers:{
      accessToken: localStorage.getItem("accessToken"),
    },}).then((response)=>{
      if(response.data.error){
        setAuthState({...authState,status:false});
      }else{
        setAuthState({
          username: response.data.username,
          id:response.data.id,
          status:true,
        });
      }
    });
  },[]);

  const logout = () =>{
    localStorage.removeItem("accessToken");
    setAuthState({username:"", id:0, status:false});
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{authState, setAuthState}}>
        <Router>
          <div className="navbar">
              <Link to="/"> Home Page</Link>
              <Link to="/loginmireserva">Mi Reserva</Link>
              <div className="loggedInContainer">
                {!authState.status && (
                  <div className>
                  <Link to="/login"> Login</Link>
                  <Link to="/registration"> Register</Link>
                  </div>
                )}
                <h2>{authState.username}</h2>
                {authState.status &&  <button onClick={logout}>Logout</button>}
              </div>
              
          </div>
          <Switch>
            <Route path="/" exact component={Home}/>
            <Route path="/createpost" exact component={CreatePost}/>
            <Route path="/createpost/:id" exact component={CreatePost}/>
            <Route path="/loginmireserva" exact component={LoginMiReserva}/>
            <Route path="/mireserva" exact component={MiReserva}/>
            <Route path="/reserva/:id" exact component={Reserva}/>
            <Route path="/habitaciones/:id" exact component={Habitaciones}></Route>
            <Route path="/registration" exact component={Registration}/>
            <Route path="/login" exact component={Login}/>
          </Switch>
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
