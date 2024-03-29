import { useDispatch } from "react-redux";
import { toggleMenu } from "../Utils/appSlice";

const Header = () => {
  const dispatch = useDispatch();
  const toggleMenuHandler = () => {
    dispatch(toggleMenu());
  };
  return (
    <div className=" bg-black flex justify-between px-5 py-2">
      <div className=" flex items-center">
        <button>
          <img
            alt="hamburger-menu"
            src={require("../img/hamburger-menu.png")}
            className="w-5 text-white mr-4 invert"
            onClick={() => toggleMenuHandler()}
          ></img>
        </button>

        <button className=" flex items-center">
          <img
            alt="youtube-logo"
            src={require("../img/youtube-logo.png")}
            className="w-7 mr-1"
          ></img>
          
          <span className="text-white font-bold text-md">YouTube</span>
        </button>
      </div>
      <div className=" w-2/3  flex items-center justify-center">
        <input
          type="text"
          placeholder="Search"
          className="w-1/2 bg-gray-900 px-4 p-2 rounded-l-3xl "
        ></input>
        <button className="  bg-gray-900   px-4 h-10 w-16 rounded-r-3xl">
          <img
            src={require("../img/search-icon.png")}
            className=" invert w-4 m-auto"
          ></img>
        </button>
        <button className="bg-gray-900 ml-4  w-10 h-10 rounded-3xl hover:bg-gray-800">
          <img
            src={require("../img/microphone-icon.png")}
            className="w-4 invert m-auto"
          ></img>
        </button>
      </div>
      <div className="flex items-center px-2">
        <button>
          <img
            src={require("../img/add-video-icon.png")}
            className="w-5 invert mr-4"
          ></img>
        </button>
        <button>
          <img
            src={require("../img/notification-icon.png")}
            className="w-5 invert mr-4"
          ></img>
        </button>
        <button>
          <img
            src={require("../img/user-icon.png")}
            className="w-5 invert"
          ></img>
        </button>
      </div>
    </div>
  );
};
export default Header;
