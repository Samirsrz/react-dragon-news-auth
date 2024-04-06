import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Homes from "../pages/home/Homes";
import Login from "../pages/Login/Login";



const routes = createBrowserRouter([
    {
        path: '/',
        element: <Root></Root>,
        children: [
             {
                path: '/',
                element: <Homes></Homes>
             },

             {
                path:'/login',
                element :<Login></Login>
             }

        ]
    }
])





export default routes;