import { useState, useEffect } from "react";
import SecondsCounter from "./components/SecondsCounter";
import Controls from "./components/controls.jsx";
import './App.css'

function App() {
  //Creas el estado seconds inicilizado a 0 y su setter 
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  useEffect(() => {
    //Código que se ejecuta después del render

    if (!isRunning) return;
  
    const interval = setInterval(() => {
      setSeconds(prev => prev + 1); //prev toma el valor más reciente de seconds y le suma uno 
    }, 1000);// el intervalo se ejecuta cada 1000ms -> 1 segundo

    // limpiar intervalo si el componente se desmonta
    return () => clearInterval(interval);
  }, [isRunning]); // el efecto depende de isRunning

  // Handlers de los botones
  const handlePause = () => setIsRunning(false);
  const handleResume = () => setIsRunning(true);
  const handleReset = () => {
    setIsRunning(true); 
    setSeconds(0);
  };

  return (
    <div className="container py-4 text-center">
      <SecondsCounter seconds={seconds} />
      <Controls
        isRunning={isRunning}
        onPause={handlePause}
        onResume={handleResume}
        onReset={handleReset}
      />
    </div>
  );
}

export default App;
