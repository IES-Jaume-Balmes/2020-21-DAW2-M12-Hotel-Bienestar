import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Reserva from "./pages/Reserva";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import {AuthContext} from "./helpers/AuthContext";
import {useState,useEffect} from "react";
import axios from 'axios';
import Habitaciones from './pages/Habitaciones';
import LoginMiReserva from './pages/LoginMiReserva';
import MiReserva from './pages/MiReserva';
import CreateUsuari from './pages/CreateUsuari';
import logo_large from "./img/logo_white_large.png";
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './pages/Footer';
import Inicio from './pages/Inicio';

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
          <nav className="navi shadow sticky-top p-3 mb-5 rounded">
            <div className="row">
              <div className="col col-lg-2">
                <Link to="/"><img src={logo_large} alt="Inicio" className="img-fluid"/> </Link>
              </div>
              <div className="menu col-sm">
                <div><Link to="/createpost"> Hacer una reserva</Link></div>
                <div><Link to="/createusuari"> Crear un Cliente</Link></div>
              </div>
              <div className="col-ls">
                {!authState.status && (
                  <>
                    <Link to="/login"> Login<PersonIcon/></Link>
                    <Link to="/registration"> Register <PersonAddIcon/></Link>
                    <div><Link className="neon-button" to="loginmireserva">Mi reserva</Link></div>
                  </>
                )}
                  <div className="loggedInContainer">
                    <h2>{authState.username}</h2>
                    {authState.status &&  <button onClick={logout}>Logout</button>}
                  </div>
              </div>
            </div>
          </nav>
          <Switch>
          <Route path="/" exact component={Inicio}/>
            <Route path="/habitaciones" exact component={Home}/>
            <Route path="/createpost" exact component={CreatePost}/>
            <Route path="/createpost/:id" exact component={CreatePost}/>
            <Route path="/loginmireserva" exact component={LoginMiReserva}/>
            <Route path="/clientes/mireserva" exact component={MiReserva}/>
            <Route path="/reserva/:id" exact component={Reserva}/>
            <Route path="/habitaciones/:id" exact component={Habitaciones}></Route>
            <Route path="/registration" exact component={Registration}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/createusuari" exact component={CreateUsuari}/>
            <Route path="/createusuari/:id" exact component={CreateUsuari}/>
          </Switch>
        </Router>
        <Footer />
      </AuthContext.Provider>
    </div>
  );
}

export default App;
