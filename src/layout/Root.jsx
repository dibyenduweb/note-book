import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div>
            <Outlet></Outlet>
            <ToastContainer />
        </div>
    );
};


export default Root;