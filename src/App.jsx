import { useState, useEffect } from "react";
import SecondsCounter from "./components/SecondsCounter";
import './App.css'

function App() {
  //Creas el estado seconds inicilizado a 0 y su setter 
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    //Código que se ejecuta después del render

    const interval = setInterval(() => {
      setSeconds(prev => prev + 1); //prev toma el valor más reciente de seconds y le suma uno 
    }, 1000);// el intervalo se ejecuta cada 1000ms -> 1 segundo

    // limpiar intervalo si el componente se desmonta
    return () => clearInterval(interval);
  }, []);

  return <SecondsCounter seconds={seconds} />;
}

export default App;
