import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import LevelOne from "./containers/LevelOne/LevelOne";

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
    {
        path: '1',
        Component: LevelOne,
    }
]);

export default router;