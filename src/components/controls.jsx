function Controls({ isRunning, onPause, onResume, onReset }) {
    return (
        <div className="d-flex gap-3 justify-content-center"  aria-label="Controles del contador">
            <button className="btn btn-danger" onClick={onPause} disabled={!isRunning}>
                Pausar
            </button>
            <button className="btn btn-success" onClick={onResume} disabled={isRunning}>
                Reanudar
            </button>
            <button className="btn btn-primary" onClick={onReset}>
                Reiniciar
            </button>
        </div>
    );
}

export default Controls;
