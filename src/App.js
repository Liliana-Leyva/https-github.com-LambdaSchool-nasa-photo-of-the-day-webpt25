import React, {useState, useEffect} from "react";
import "./App.css";
import axios from 'axios';
import Header1 from './header'


function App() {
    const picture =
      "https://api.nasa.gov/planetary/apod?api_key=DkWNGZPvXKe4c374vReR3d5IgNzWnxgTJkBIYimJ";
  
    const [photo, setPhoto] = useState(null);
  
    useEffect(() => {
      axios.get(picture)
      .then((response) => {
        setPhoto(response.data);
      });
    }, [picture]);

  
  
  return (
    <div className="App">
      <h1>{photo.title}</h1>
    </div>
  );
}
//
export default App;
