import { Outlet } from "react-router-dom";

const RootView = () => {
    return (
        <>
            <header>Aca pondré el header</header>
            <main>
                <Outlet />
            </main>
            <footer>Aca pondré el footer</footer>
        </>
    );
};
export default RootView