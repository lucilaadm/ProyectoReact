import { createBrowserRouter } from "react-router-dom";
import RootView from "../views/RootView.jsx";
import HolaMundo from "../components/pages/Ejercicio1.jsx";
import Ejercicio2 from "../components/pages/Ejercicio2.jsx";
import Ejercicio3 from "../components/pages/Ejercicio3.jsx";
import Ejercicio4 from "../components/pages/Ejercicio4.jsx";
import Ejercicio5 from "../components/pages/Ejercicio5.jsx";
import Ejercicio6 from "../components/pages/Ejercicio6.jsx";
import Ejercicio7 from "../components/pages/Ejercicio7.jsx";


export const router = createBrowserRouter ([
    {
        path: "/",
        element: <RootView/>,
        children: [
            {
                path: "ejercicio",
                element: <p>prueba</p>,
            },
            {
                path: "ejercicio1",
                element: <HolaMundo/>,
            },
            {
                path: "ejercicio2",
                element: <Ejercicio2 mensaje="mi amigo!"/>,
            },
            {
                path: "ejercicio3",
                element: <Ejercicio3 mensaje="mi amigo!"/>,
            },
            {
                path: "ejercicio4",
                element: <Ejercicio4/>,
            },
            {
                path: "ejercicio5",
                element: <Ejercicio5/>,
            },
            {
                path: "ejercicio6",
                element: <Ejercicio6/>,
            },
            {
                path: "ejercicio7",
                element: <Ejercicio7/>,
            },
        ],
    },
]);