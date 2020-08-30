import React, { useState, useEffect } from "react";
import axios from "axios";
const App = props => {
  useEffect(() => {
    axios.get("/core/hello").then(res => setState(res.data));
  }, []);
  const [state, setState] = useState("");
  return (
    <div className="jumbotron text-center font-weight-bold">
      <p>{state.response_text}</p>
    </div>
  );
};
export default App;
