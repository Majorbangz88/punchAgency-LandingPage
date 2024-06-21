import { HomePage } from "../pages/homePage";
import Home from '../pages/home/index'

export const ROUTES = [
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: "",
                element: <Home />,
            }
        ]
    }
]