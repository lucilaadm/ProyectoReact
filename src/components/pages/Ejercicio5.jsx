import { useEffect, useRef, useState } from "react";
import { generateRandomId } from "../../helpers/helpers";

const todosLS = JSON.parse(localStorage.getItem('todos')) || [];


const Ejercicio5 = () => {
    const [todos, setTodos] = useState (todosLS)
    
    const $inputRef = useRef();

    const handleNuevaTarea = (e) => {
      e.preventDefault();
      const todoInput = $inputRef.current;
      if (todoInput.value) {
        const nuevoArreglo = [{id:generateRandomId(), text: todoInput.value }]
        .concat(todos);
  
        setTodos(nuevoArreglo);
        $inputRef.current.value = "";

      }
    };

    useEffect(()=> {
      localStorage.setItem("todos", JSON.stringify(todos));
    },  [todos]
      );

  return (
    <section className="border border-2 d-inline-block p-2 w-100">
      {/*creacion de tareas*/}
        <h1>Bienvenido</h1>
        <hr />
        <div className="d-flex justify-content-between align-items-center">
        <p>Ingresa tus tareas:</p>
        <div>
          <input type="text" ref={$inputRef} className="form-control" />
        </div>
        <button onClick={handleNuevaTarea} className='btn btn-light' >Agregue tarea</button>
        </div>
      {/*listado de tareas*/}
      <div className="ml-3">
      <ul className="list-group p-2">
        {todos.map((tarea) => (
          <li key={tarea.id}>{tarea.text}</li>
            )
          )
        }
      </ul>
      </div>
    </section>
    );
  };

export default Ejercicio5;