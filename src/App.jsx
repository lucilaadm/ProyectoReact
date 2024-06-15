
import HolaMundo from "./components/pages/Ejercicio1";
import Ejercicio2 from "./components/pages/Ejercicio2";
import Ejercicio3 from "./components/pages/Ejercicio3";
import Ejercicio4 from "./components/pages/Ejercicio4";

const App = () => {
    return (
      <>
        <HolaMundo/>
        <Ejercicio2 mensaje="mi amigo!"/>
        <Ejercicio3 mensaje="mi amigo!"/>
        <Ejercicio4 />
      </>
    );
  };
  export default App;
  