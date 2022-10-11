import ErrorPage from "../components/ErrorPage/ErrorPage";
import Home from "../components/Home/Home";
import QuizPlayGround from "../components/QuizPlayGround/QuizPlayGround";
import Statistics from "../components/Statistics/Statistics";
import quizTopicsLoader from "../loaders/quizTopicLoaders";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../layouts/Main");


const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        errorElement: <ErrorPage/>,
        loader: quizTopicsLoader,
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
                    {
                        path:'/statistic',
                        element: <Statistics/>
                    },
                    {
                        path:'/quiz/:quizId',
                        element: <QuizPlayGround/>,
                        loader: ({params:{quizId}}) => fetch(`https://openapi.programming-hero.com/api/quiz/${quizId}`)
                    },
                ]
            }
        ]
    }
]);

export default router;