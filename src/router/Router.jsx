import {
    createBrowserRouter,
  
  } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../page/Home/Home";
import ViewNote from "../components/ViewNote/ViewNote";
import EditNote from "../page/EditNote/EditNote";

 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement:<div>Error</div>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
          path:"/viewnot",
          element:<ViewNote/>
        },
        {
          path:"/edit/:id",
          element:<EditNote/>,
          loader: ({params}) => fetch(`https://react-notebook-server.vercel.app/note/${params.id}`)
        },

        
      ]
    },
  ]);

