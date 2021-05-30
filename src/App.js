import './App.css';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
<<<<<<< HEAD
import Payment from './Components/Payment/Payment';
=======
import Search from './Components/Search/Search';
import BookNow from './Components/BookNow/BookNow';
import Home from './Components/Home/Home';

export const UserContext = createContext()

>>>>>>> main

function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
        <Switch>
<<<<<<< HEAD
        <Route path="/payment">
            <Payment></Payment>
          </Route>
          <Route path="/">
=======
          <Route exact path="/">
>>>>>>> main
            <Home></Home>
          </Route>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/search">
            <Search></Search>
          </Route>
          <Route path="/dashboard">
          </Route>
          <Route path="/:id">
            <BookNow></BookNow>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
