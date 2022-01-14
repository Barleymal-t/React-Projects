import Person from "./Person";
import { data } from "./people";
import React from "react";

function App() {
  const [people, setPeople] = React.useState(data);
  function clearAll() {
    setPeople([]);
  }
  return (
    <main>
    <section className="container">
      <h3>{people.length} birthdays today</h3>
      {people.map((person) => {
        return <Person key={person.id} {...person} />;
      })}
      <p id="app-par"></p>
      <button onClick={() => clearAll()}>Clear All</button>
        </section>
    </main>
  );
}

export default App;
