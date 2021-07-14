  import React from 'react';
import Home from './components/Home';
import Contact from './components/Contact';
import About from './components/About';
import { Route, Switch, NavLink } from 'react-router-dom';

const App = () => {
  return (
    <div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">Todos</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Posts</NavLink>
        </li>
      </ul>

      <Switch>
        <Route
          exact
          path="/"
          render={props => <Home name="Alligator.io" {...props} />}
        />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
      </Switch>
    </div>
  )
}

export default App;