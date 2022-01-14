import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
const url =
  "https://raw.githubusercontent.com/Barleymal-t/react-tours-api/main/public/tours.json";

function App() {
  const [loading, setLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const removeTour = (id)=> {
      const newTours = tours.filter((tour) => tour.id !== id)
      setTours(newTours)
  }

  const fetchTours = async () => {
    setLoading(true);
      const response = await fetch(url);
      const tours = await response.json();
      setLoading(false);
      setTours(tours);
  };

  useEffect(() => {
    fetchTours();
  }, []);
  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  } else if (tours.length ===0){
    return <main>
        <div className="title">
            <h2>
                no tours left
            </h2>
        </div>
    </main>
  }

  return (
    <main>
      <Tours tours={tours} removeTour={removeTour}/>
    </main>
  );
}

export default App;
