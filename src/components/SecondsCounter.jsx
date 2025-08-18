function SecondsCounter({ seconds }) {
    return (
        <div className="counter">
            <h1>Contador de segundos</h1>            
            <h2><i className="fa-solid fa-clock"></i> {seconds} <i className="fa-solid fa-clock"></i></h2>
        </div>
    );
}

export default SecondsCounter;
