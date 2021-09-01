import React from "react";
import ReactDOM from "react-dom";
import Pet from "./pet";

const App = () => {
  return (
    <div>
      <h1>Adopt Me</h1>
      <Pet name="Luna" animal="dog" breed="havanese" />
      <Pet name="Lsdfauna" animal="afas" breed="werw" />
      <Pet name="Lujhgfna" animal="dhgfd" breed="fs" />
    </div>
  );
};

ReactDOM.render(React.createElement(App), document.getElementById("root"));
