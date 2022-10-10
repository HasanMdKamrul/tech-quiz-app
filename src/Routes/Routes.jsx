import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        children:[
            {
                errorElement:<ErrorPage/>,
                children:[
                    {
                        index: true,
                        element: <Home/>,
                    },
                    {
                        path:'/home',
                        element: <Home/>,
                    },
                ]
            }
        ]
    }
]);

export default router;