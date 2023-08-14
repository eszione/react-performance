import { RouteObject, useRoutes } from "react-router-dom";
import Home from "./components/home/Home";
import Full from "./components/full/Full";
import Memo from "./components/memo/Memo";
import Children from "./components/children/Children";
import Comp1 from "./components/comp1/Comp1";

export default () => useRoutes(routes);
    
const routes: RouteObject[] = [
    {
        path: '/',
        element: <Home />
    },
    {
        path: '/full',
        element: <Full />
    },
    {
        path: '/memo',
        element: <Memo />
    },
    {
        path: '/children',
        element: 
            <Children>
                <Comp1 />
            </Children>
    }
];
