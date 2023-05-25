import { createBrowserRouter } from "react-router-dom";
import App from "./App";

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
    {
        path: '1',
        element: <div>Placeholder</div>,
    }
]);

export default router;