import { Link, NavLink } from "react-router-dom"

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <Link className="navbar-brand" href="/">Proyecto</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className={(isActive) => {
                            return isActive ? "nav-link active" : "nave-link"
                        }}
                            aria-current="page"
                            to="/Ejercicio1">Ejercicio 1</NavLink>
                        <NavLink className={(isActive) => {
                            return isActive ? "nav-link active" : "nave-link"
                        }}
                            aria-current="page"
                            to="/Ejercicio2">Ejercicio 2</NavLink>
                        <NavLink className={(isActive) => {
                            return isActive ? "nav-link active" : "nave-link"
                        }}
                            aria-current="page"
                            to="/Ejercicio3">Ejercicio 3</NavLink>
                        <NavLink className={(isActive) => {
                            return isActive ? "nav-link active" : "nave-link"
                        }}
                            aria-current="page"
                            to="/Ejercicio4">Ejercicio 4</NavLink>
                        <NavLink className={(isActive) => {
                            return isActive ? "nav-link active" : "nave-link"
                        }}
                            aria-current="page"
                            to="/Ejercicio5">Ejercicio 5</NavLink>
                        <NavLink className={(isActive) => {
                            return isActive ? "nav-link active" : "nave-link"
                        }}
                            aria-current="page"
                            to="/Ejercicio6">Ejercicio 6</NavLink>
                        <NavLink className={(isActive) => {
                            return isActive ? "nav-link active" : "nave-link"
                        }}
                            aria-current="page"
                            to="/Ejercicio7">Ejercicio 7</NavLink>
                        <NavLink className={(isActive) => {
                            return isActive ? "nav-link active" : "nave-link"
                        }}
                            aria-current="page"
                            to="/Ejercicio8">Ejercicio 8</NavLink>
                        <NavLink className={(isActive) => {
                            return isActive ? "nav-link active" : "nave-link"
                        }}
                            aria-current="page"
                            to="/Ejercicio9">Ejercicio 9</NavLink>
                        <NavLink className={(isActive) => {
                            return isActive ? "nav-link active" : "nave-link"
                        }}
                            aria-current="page"
                            to="/Ejercicio10">Ejercicio 10</NavLink>
                        <NavLink className={(isActive) => {
                            return isActive ? "nav-link active" : "nave-link"
                        }}
                            aria-current="page"
                            to="/Ejercicio11">Ejercicio 11</NavLink>
                        <NavLink className={(isActive) => {
                            return isActive ? "nav-link active" : "nave-link"
                        }}
                            aria-current="page"
                            to="/Ejercicio12">Ejercicio 12</NavLink>
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Header