
import { useEffect, useState } from 'react';
import './App.css';
import ListElement from './components/ListElement';




function App() {
  const [data, setData] = useState([]);
  async function getElement() {
    const reponse = await fetch("https://restcountries.com/v3.1/all");
    const country = await reponse.json();
    setData(country);

  }
  useEffect(() => {
    getElement();
  }, []);
  console.log(data[0]);
  

  return (
    <div>
      {data.map((x) => (
        <ListElement key={x.name.common} data={x} />
      ))}
    </div>
  );
}

export default App;
