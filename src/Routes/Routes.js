import { createBrowserRouter } from "react-router-dom";
import Booking from "../components/Booking/Booking";
import DestiDetails from "../components/DestiDetails/DestiDetails";
import Destination from "../components/Destination/Destination";
import DestinationCard from "../components/DestinationCard/DestinationCard";
import Home from "../components/Home/Home";
import HotelDetails from "../components/HotelDetails/HotelDetails";
import Hotels from "../components/Hotels/Hotels";
import Login from "../components/Login/Login";
import Register from "../components/Register/Register";
import Main from "../Layout/Main";
import PrivateRoute from "./PrivateRoute";

const routes = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element: <Login></Login>
            },
            {
                path:'/register',
                element: <Register></Register>
            },
            {
                path:'/destination',
                element: <Destination></Destination>,
                loader: ()=> fetch('https://earth-trekker-server.vercel.app/destination')
            },
            {
                path: '/destinationcard',
                element:<DestinationCard></DestinationCard>
            },
            {
                path:'/:id',
                loader: ({params})=> fetch(`https://earth-trekker-server.vercel.app/destination/${params.id}`),
                element: <DestiDetails></DestiDetails>
            },
            {
                path:'/booking',
                element: <PrivateRoute>
                    <Booking></Booking>
                </PrivateRoute>
            },
            {
                path:'/hotels',
                element: <Hotels></Hotels>,
                loader: ()=> fetch('https://earth-trekker-server.vercel.app/hotels')
            },
            {
                path:"/hotels/:id",
                element: <HotelDetails></HotelDetails>,
                loader: ({params})=> fetch(`https://earth-trekker-server.vercel.app/hotels/${params.id}`)
            }
        ]
    }
])

export default routes;