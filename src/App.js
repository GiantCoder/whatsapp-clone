import "./App.css";
import React, { useState } from "react";
import Chat from "./components/Chat";
import Sidebar from "./components/Sidebar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login";

function App() {
  const [user, setUser] = useState(null);
  return (
    // BEM naming convention
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <section className="app__body">
          <Router>
            <Switch>
              <Sidebar />
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </section>
      )}
    </div>
  );
}
export default App;
