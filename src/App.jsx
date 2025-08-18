import { useState, useEffect } from "react";
import SecondsCounter from "./components/SecondsCounter";
import Controls from "./components/controls.jsx";
import AlertInput from "./components/AlertInput";
import './App.css'

function App() {
  //Creas el estado seconds inicilizado a 0 y su setter 
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);

  const [target, setTarget] = useState(null);
  const [hasAlerted, setHasAlerted] = useState(false);

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

  const handleSetTarget = (n) => {
    setTarget(n);
    setHasAlerted(false);
  };

  const handleResetAlert = () => {
    setHasAlerted(false);   // como si nunca se hubiera disparado
    setTarget(null);        // opcional: borra también el objetivo
  };

  // Disparar alerta exactamente una vez cuando seconds === target
  useEffect(() => {
    if (target == null) return;
    if (!hasAlerted && seconds === target) {
      setHasAlerted(true);
      // Notificación simple
      playBeep();

    }
  }, [seconds, target, hasAlerted]);

  return (
    <div className="container py-4 text-center">
      <SecondsCounter seconds={seconds} />
      <Controls
        isRunning={isRunning}
        onPause={handlePause}
        onResume={handleResume}
        onReset={handleReset}
      />
      {
        hasAlerted && (
          <div className="alert alert-success mt-3" role="alert">
            ¡Has alcanzado el objetivo de <strong>{target}</strong> segundos!
            <button type="button" className="btn-close float-end" onClick={() => setHasAlerted(false)}></button>
          </div>
        )
      }

      {/* Entrada para fijar el objetivo */}
      <AlertInput onSetTarget={handleSetTarget} />

      {/* Estado de la alerta/objetivo en la UI */}
      {target != null && (
        <div className="alert alert-info mt-3" role="alert">
          Avisaré cuando el contador llegue a <strong>{target}</strong> segundos.
          {hasAlerted && <span className="ms-2">Objetivo alcanzado.</span>}
          {/* Botón de reinicio */}
          <div className="mt-2">
            <button className="btn btn-outline-warning btn-sm" onClick={handleResetAlert}>
              Reiniciar alerta
            </button>
          </div>
        </div>

      )}
    </div>
  );
}

// Función para reproducir un beep simple
function playBeep() {
  const ctx = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = ctx.createOscillator();
  const gainNode = ctx.createGain();

  oscillator.type = "sine";   // forma de onda: sine, square, triangle...
  oscillator.frequency.setValueAtTime(1000, ctx.currentTime); // Hz -> tono (1000Hz ~ beep agudo)

  oscillator.connect(gainNode);
  gainNode.connect(ctx.destination);

  oscillator.start();
  oscillator.stop(ctx.currentTime + 0.3); // duración 0.3s
}

export default App;
