// frontend/src/App.js
import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { Route, Switch } from "react-router-dom";

// import Header from "./components/Header";
// import SignUp from "./views/SignUp";
// import CreateSpotPage from "./views/CreateSpot/CreateSpot";
// import SpotPage from "./views/SpotPage/SpotPage";
// import EditSpot from "./views/EditSpot/EditSpot";
// import CreateReview from "./views/Review/CreateReview";
// import ManageListings from "./views/ManageListings/ManageListings";
// import Main from "./views/Main/Main";
// import Footer from "./components/Footer"
import TestPage from "./views/TestPage";

import * as userActions from "./store/user";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    dispatch(userActions.restoreUserThunk()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return isLoaded && (
    <>
      {/* <Header isLoaded={isLoaded} /> */}
      {isLoaded && (
        <Switch>
          {/* <Route exact path="/">
            <Main />
          </Route> */}
          {/* <Route exact path="/signup">
            <SignUp />
          </Route> */}
          {/* <Route exact path="/become-a-host/property-form">
            <CreateSpotPage />
          </Route> */}
          {/* <Route exact path="/manage-listings">
            <ManageListings />
          </Route> */}
          {/* <Route exact path="/edit-spot/:spotId">
            <EditSpot />
          </Route> */}
          {/* <Route exact path="/spot-details/:spotId">
            <SpotPage />
          </Route> */}
          {/* <Route exact path="/submit-review/:spotId">
            <CreateReview />
          </Route> */}
          <Route>
            <TestPage />
          </Route>
        </Switch>
      )}
      {/* <Footer /> */}
    </>

  );
}

export default App;
