import React from "react";
import Nav from "./components/Nav";
import "./App.css";
import data from "./utils/data";
import Card from "./components/Card";

console.log(data);

function App() {
    const cards = data.map((item) => {
   
        return <Card key={item.id}
            item={item}
            />
  });
    console.log(cards);
  return (
    <>
      <Nav />
      <div className="container">{cards}</div>
    </>
  );
}

export default App;
