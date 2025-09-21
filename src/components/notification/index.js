import React from "react";
import { Switch, Route } from "react-router-dom";
import Sidebar from "../dashboard/Sidebar";
import AllNotification from "./components/AllNotification";

function App() {
  return (
    <div className="main_wrapper">
      <Sidebar />
      <Switch>
        <Route path="/notification/list" component={AllNotification} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    </div>
  );
}

export default App;
