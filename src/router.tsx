import { createBrowserRouter } from 'react-router-dom';
import App from './App';
import { LevelOne, LevelTwo } from './containers/containers';

const router = createBrowserRouter([
    {
        path: '/',
        Component: App,
    },
    {
        path: '1',
        Component: LevelOne,
    },
    {
        path: '2',
        Component: LevelTwo
    }
]);

export default router;