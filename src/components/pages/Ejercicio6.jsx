import { useRef } from "react"

const Ejercicio6 = () => {

    const $inputColor = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("se hizo el submit");
        const color = $inputColor.current.value;
        console.log(color);
    }


  return (
    <section>
        <h1>Administrar colores</h1>
        <hr />
        {/*Formulario*/}
        <form className="bg-white p-3 rouded text-dark" onSubmit={handleSubmit}>
            <img src="https://tse4.mm.bing.net/th?id=OIP.BlWAk4s25MBJ7AM3RSSCFgHaEo&pid=Api" class="w-25 d-flex float-start" alt="color azul" />
            <fieldset>
                <input 
                placeholder="Indique un color. Ejemplo: azul"
                type="text" 
                className="form-control mt-3 float-end" 
                ref={$inputColor}
                required
                maxLength={25}
                minLength={3}
                />    
            </fieldset>  
            <div className="text-end"> 
            <button className="btn btn-dark mt-3" type="submit">Guardar</button>
            </div>
        </form>
        {/*tabla*/}
    </section>
    )
}
export default Ejercicio6