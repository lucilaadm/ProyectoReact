import { useState } from "react";

const Ejercicio3 = (props) => {
 const {mensaje: mensajeProp} = props;

 const [mensaje, setMensaje] = useState(mensajeProp);

 const handleClick = () => {
   setMensaje(`${mensajeProp} (from changed state!)`);
  };
  return (
    <>
        <h1>Holi {mensaje}</h1>
        <button onClick={handleClick}  className='btn btn-primary mt-3'>Click me</button>
    </>
    );
};

export default Ejercicio3;