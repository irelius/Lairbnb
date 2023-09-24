// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";
import LoginFormPage from "./components/LoginFormPage";
import SignupFormPage from "./components/SignupFormPage";
import * as userActions from "./store/user";
import Test from "./components/TestPage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(userActions.restoreUserThunk()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    isLoaded && (
      <Switch>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route>
          <Test />
        </Route>
      </Switch>
    )
  );
}

export default App;
