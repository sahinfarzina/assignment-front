import Dashboard from './components/dashboard/dashboard' ;
import Login from './components/login/login' ;
import Register from './components/register/register' ;
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from 'react';


function App() {
  const [ user, setLoginUser] = useState({})
  const [token, setToken] = useState();

  if(!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="App">
      <Router>
        <Switch>
        <Route exact path="/">
            {
              user && user._id ? <Dashboard setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser}/>
            }
          </Route>
          <Route path="/register"><Register /></Route>
          <Route path="/login">
            <Login setLoginUser={setLoginUser}/>
          </Route>
        </Switch>
      </Router>
      
    </div>
  );
}

export default App;
