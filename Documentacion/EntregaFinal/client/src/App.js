import './App.css';
import {BrowserRouter as Router, Route, Switch, Link, useHistory} from 'react-router-dom';
import {AuthContext} from "./helpers/AuthContext";
import {useState,useEffect} from "react";
import axios from 'axios';
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import PersonIcon from '@material-ui/icons/Person';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home";
import CreateReserva from "./pages/CreateReserva";
import Login from "./pages/Login";
import Registration from "./pages/Registration";
import Habitaciones from './pages/Habitaciones';
import LoginMiReserva from './pages/LoginMiReserva';
import MiReserva from './pages/MiReserva';
import CreateUsuari from './pages/CreateUsuari';
import Footer from './pages/Footer';
import Inicio from './pages/Inicio';
import logo from "./img/logo_white_large.png";
import HomeEmpleados from './pages/HomeEmpleados';
import HabitacionesEmpleados from './pages/HabitacionesEmpleados';
import ClientesEmpleados from './pages/ClientesEmpleados';
import Galeria from './pages/Galeria';
import ProtectedRoute from './pages/ProtectedRoute';
import CreateHabitacion from './pages/CreateHabitacion' 

function App() {
  const [isAuth, setIsAuth] = useState(false);
  const [authState, setAuthState] = useState({nombre:"", id:0, status: false,});
  
  useEffect(()=>{
    axios.get('http://localhost:3001/auth',{ headers:{
      accessToken: localStorage.getItem("accessToken"),
    },}).then((response)=>{
      if(response.data.error){
        setAuthState({...authState,status:false});
      }else{
        setAuthState({
          nombre: response.data.nombre,
          id:response.data.id,
          status:true,
        });
        setIsAuth(true);
      }
    });
  },[]);

  const logout = () =>{
    localStorage.removeItem("accessToken");
    setAuthState({nombre:"", id:0, status:false});
    setIsAuth(false)
  };

  return (
    <div className="App">
      <AuthContext.Provider value={{authState, setAuthState}}>
        <Router>
        <nav className="navbar sticky-top w-100 navbar-expand-sm bg-dark navbar-dark">
          <Link className="logo" to="/"><img src={logo} alt="Inicio" className="img-fluid h-100 w-100"/> </Link>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#collapsibleNavbar"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="collapsibleNavbar">
              <ul className="navbar-nav">
                <li className="nav-item">
                <Link to="/CreateReserva" className="neon-button"> ¡Haz tu Reserva!</Link>
                </li>
                <li className="nav-item">
                <Link  to="/loginmireserva"  className="neon-button">Mi reserva</Link>
                </li>
        
              </ul>

              
            </div>
            <div className= " justify-content-end">
                  {!authState.status && (
                  <>
                    <Link  className=" user text-white" to="/login" onClick={()=>{
                      setIsAuth(true);}}> Acceso Empleado<PersonIcon/></Link>
                  </>
                )}
                  <>
                    {localStorage.getItem("accessToken") &&  <button onClick={logout}>Logout</button>}
                  </>
                </div>
          </nav>
          <Switch>
            <Route path="/" exact component={Inicio}/>
            <Route path="/home" exact component={Home}/>
            <Route path="/CreateReserva" exact component={CreateReserva}/>
            <Route path="/CreateReserva/:id" exact component={CreateReserva}/>
            <Route path="/loginmireserva" exact component={LoginMiReserva}/>
            <Route path="/mireserva/:id" exact component={MiReserva}/>
            <Route path="/habitaciones/:id" exact component={Habitaciones}/>
            <Route path="/registration" exact component={Registration}/>
            <Route path="/login" exact component={Login}/>
            <Route path="/createusuari" exact component={CreateUsuari}/>
            <Route path="/createusuari/:id" exact component={CreateUsuari}/>
            

          </Switch>
          <ProtectedRoute exact path="/HomeEmpleados" component={HomeEmpleados} isAuth={isAuth} />
          <ProtectedRoute path="/HabitacionesEmpleados"  component={HabitacionesEmpleados} isAuth={isAuth}/>
          <ProtectedRoute path="/ClientesEmpleados" component={ClientesEmpleados} isAuth={isAuth} />
          <ProtectedRoute path="/CreateHabitacion" component={CreateHabitacion} isAuth={isAuth} />
        </Router>
        <Footer/>
      </AuthContext.Provider>

    </div>
  );
}

export default App;
