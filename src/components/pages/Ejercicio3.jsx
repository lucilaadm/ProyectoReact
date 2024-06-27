import { useState } from "react";
import Ejercicio2 from "./Ejercicio2";

const Ejercicio3 = (props) => {
 const {mensaje: mensajeProp} = props;

 const [mensaje, setMensaje] = useState(mensajeProp);

 const handleClick = () => {
   setMensaje(`${mensajeProp} (from changed state!)`);
  };
  return (
    <>
        < Ejercicio2 mensaje={mensaje}/>
        <button onClick={handleClick}  className='btn btn-primary mt-3'>Click me</button>
    </>
    );
};

export default Ejercicio3;