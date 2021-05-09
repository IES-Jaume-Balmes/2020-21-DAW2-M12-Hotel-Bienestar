import './App.css';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import Home from "./pages/Home";
import CreatePost from "./pages/CreatePost";
import Reserva from "./pages/Reserva";
import Login from "./pages/Login";
import Registration from "./pages/Registration";


function App() {

  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/"> Home Page</Link>
          <Link to="/createpost"> Hacer una reserva</Link>
          <Link to="/login"> Login</Link>
          <Link to="/registration"> Register</Link>
        </div>
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/createpost" exact component={CreatePost}/>
          <Route path="/reserva/:id" exact component={Reserva}/>
          <Route path="/registration" exact component={Registration}/>
          <Route path="/login" exact component={Login}/>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
