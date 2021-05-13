import React from 'react';
import Header from './componentes/Header';
import Home from './componentes/Home';
import SearchPage from './componentes/SearchPage';
import { Counter } from './features/counter/Counter';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Footer from './componentes/Footer';


function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/search">
          <SearchPage />
        </Route>
        <Route path="/">
          <Home />
        </Route>

      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
