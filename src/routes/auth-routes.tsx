import { ReactNode } from "react";
import Home from "../pages/home";
import Gallary from "../pages/gallary";
import AboutUs from "../pages/about-us";
import Faqs from "../pages/faqs";


//pages



export type RouteType = {
    path: string;
    component: ReactNode
}

const authRoutes: RouteType[] = [
    {
        path: '/',
        component: <Home />,
    },
    {
        path: '/gallary',
        component: <Gallary />,
    },
    {
        path: '/about-us',
        component: <AboutUs />,
    },
    {
        path: '/faqs',
        component: <Faqs />,
    },
    
]

export default authRoutes;