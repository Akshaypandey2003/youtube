import { Outlet } from "react-router-dom";
import MainContainer from "./MainContainer";
import SideBar from "./SideBar";
import WatchPage from "./WatchPage";
import SideBarLite from "./SideBarLite";

const Body =()=>{
    return (
        <div className="bg-black flex">
            <SideBar/>
            <SideBarLite/>
            <Outlet/>
        </div>
    )
}
export default Body;