import { useState, useEffect } from 'react'

<<<<<<< HEAD
import './App.css'
=======
import '../src/css/App.css'
>>>>>>> 1e25f3d (correccion rutas)


const App = () => {
  const [tiempo, setTiempo] = useState(0);
  const [activo, setActivo] = useState(false);
  const [reanudar, setReanudar] = useState(false);

  useEffect(() => {
    let intervalo = null;
    if (activo) {
      intervalo = setInterval(() => {
        setTiempo((prevTiempo) => prevTiempo + 1);
      }, 1000);
    } else {
      clearInterval(intervalo);
    }
    return () => clearInterval(intervalo);
  }, [activo]);

  const iniciar = () => setActivo(true);
  const pausar = () => {
    setActivo(false) 
    setReanudar(true);
  };

  const reiniciar = () => {
    setTiempo(0);
    setActivo(false);
    setReanudar(false);
  };

  return (
    <div style={{ textAlign: "center", fontSize: "24px" }}>
      <h1>⏱ Cronómetro</h1>
      <h2>{tiempo} s</h2>
      <button onClick={iniciar} disabled={activo} >{!reanudar ? "Iniciar" : "Reanudar"} </button>
      <button onClick={pausar} disabled={!activo}  >Pausar</button>
<<<<<<< HEAD
      <button onClick={reiniciar} >Reiniciar</button>
=======
      <button onClick={reiniciar}  >Reiniciar</button>
>>>>>>> 1e25f3d (correccion rutas)
    </div>
  );
};

export default App
