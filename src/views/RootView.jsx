import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";

const RootView = () => {
    return (
        <>
            <Header />
            <main>
                <Outlet />
            </main>
            <footer>Aca pondré el footer</footer>
        </>
    );
};
export default RootView