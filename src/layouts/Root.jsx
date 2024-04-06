import { Outlet } from "react-router-dom";


const Root = () => {
    return (
        <div className="w-[1770px] mx-auto">
            <Outlet></Outlet>
        </div>
    );
};

export default Root;