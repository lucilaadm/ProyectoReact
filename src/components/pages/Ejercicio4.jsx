import { useRef, useState } from "react";

const Ejercicio4 = () => {
    const [todos, setTodos] = useState (["Hacer ejercicios", "Mirar clases"])
    
    const $inputRef = useRef();

    const handleNuevaTarea = () => {
      const nuevaTarea = $inputRef.current.value;
      if (nuevaTarea.trim()) {
        const nuevoArreglo = [nuevaTarea, ...todos]
        setTodos(nuevoArreglo);
        $inputRef.current.value = "";
      }
    };

  return (
    <section class="border border-2 d-inline-block p-2">
      {/*creacion de tareas*/}
        <h1>Bienvenido</h1>
        <p>Ingresa tus tareas:</p>
        <div>
          <input type="text" ref={$inputRef} />
        </div>
        <button onClick={handleNuevaTarea} className='btn btn-light mt-3' >Agregue tarea</button>
      {/*listado de tareas*/}
      <ul class="list-group p-2">
        {todos.map((tarea, index) => (
          <li key={index}>{tarea}</li>
            )
          )
        }
      </ul>
    </section>
    );
  };

export default Ejercicio4;