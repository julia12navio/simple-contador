# ⏱️ React Seconds Counter

Un proyecto sencillo en **React + Bootstrap** que implementa un **contador de segundos** con controles básicos, alertas configurables y sonido de notificación.  
Sirve como práctica de **Hooks** (`useState`, `useEffect`) y gestión de componentes en React.

---

## 🚀 Características

- Contador que inicia automáticamente desde 0.
- **Controles**:
  - ▶️ Reanudar
  - ⏸️ Pausar
  - 🔄 Reiniciar (resetea el contador a 0 y sigue contando)
- **Alertas configurables**:
  - El usuario introduce un número objetivo.
  - Cuando el contador llega a ese número:
    - Se muestra una alerta visual de **Bootstrap**.
    - Se reproduce un **beep** con la **Web Audio API**.
- Botón de **“Reiniciar alerta”** para borrar el objetivo como si el componente se reiniciara.
- Estilizado con **Bootstrap 5** y **Font Awesome**.

---

## 🛠️ Tecnologías utilizadas

- [React](https://react.dev/)
- [Vite](https://vitejs.dev/) (bundler)
- [Bootstrap 5](https://getbootstrap.com/)
- [Font Awesome](https://fontawesome.com/) (iconos)
- **Web Audio API** (para reproducir el beep sin archivos externos)

---

## ▶️ Cómo ejecutar el proyecto

```bash
# 1. Clonar el repositorio
git clone https://github.com/julia12navio/simple-contador.git
cd simple-contador

# 2. Instalar dependencias
npm install

# 3. Ejecutar en modo desarrollo
npm run dev
