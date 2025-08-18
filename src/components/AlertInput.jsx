import { useState } from "react";

function AlertInput({ onSetTarget, min = 1}) {
    const [value, setValue] = useState("");

    const handleChange = (e) => {
        const num = e.target.value;
        // Permitimos vacío para poder borrar
        if (num === "") return setValue("");
        const n = Number(num);
        if (Number.isInteger(n) && n >= 0) setValue(num);
    };

    const handleSubmit = (e) => {
        e.preventDefault(); //evita que el navegador recargue la página
        const n = Number(value);
        if (!Number.isInteger(n) || n < min) return;
        onSetTarget(n);
    };

    return (
        <form onSubmit={handleSubmit} className="d-flex align-items-end gap-2 mt-3">
            <div className="flex-grow-1">
                <label className="form-label mb-1">Avisarme cuando el contador llegue a…</label>
                <input
                    type="number"
                    className="form-control"
                    value={value}
                    onChange={handleChange}
                    min={min}
                />
            </div>
            <button type="submit" className="btn btn-primary">Fijar alerta</button>
        </form>
    );
}

export default AlertInput;
