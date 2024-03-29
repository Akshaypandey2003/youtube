import { useSelector } from "react-redux";

const SideBar = () => {

  const isMenuOpen = useSelector(store=> store.app.isMenuOpen);
  
  return isMenuOpen && (
    <div className=" w-60 text-white p-4 text-sm">
      <div className="h-screen overflow-y-scroll no-scrollbar">
        <div className="first-container border-b my-2">
          <div className="  p-2 flex items-center">
            <img
              alt="home"
              src={require("../img/home-icon.png")}
              className="w-5  invert mx-2"
            ></img>
            <span className="ml-4">Home</span>
          </div>
          <div className="  p-2 flex items-center">
            <img
              alt="shorts"
              src={require("../img/shorts-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">Shorts</span>
          </div>
          <div className=" p-2 flex items-center">
            <img
              alt="subscription"
              src={require("../img/subscription-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">Subscriptions</span>
          </div>
        </div>
        <div className="second-container my-2 border-b">
          <div className="font-bold text-md  flex items-center">
            <span className="mx-4">You</span>
            <img
              alt="user-info"
              src={require("../img/next-icon.png")}
              className="w-5 invert mx-2"
            ></img>
          </div>
          <div className=" p-2 flex items-center">
            <img
              alt="history"
              src={require("../img/history-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">History</span>
          </div>
          <div className=" p-2 flex items-center">
            <img
              alt="watch-later"
              src={require("../img/watch-later-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">Watch Later</span>
          </div>
          <div className=" p-2 flex items-center">
            <img
              alt="like"
              src={require("../img/like-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">Liked Videos</span>
          </div>
          <div className=" p-2 flex items-center">
            <img
              alt="playlists"
              src={require("../img/playlist-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">Library</span>
          </div>
          <div className="p-2 flex items-center">
            <span className="mx-2">Show More</span>
            <img
              alt="show-More"
              src={require("../img/down-arrow-icon.png")}
              className="w-5 invert mx-2"
            ></img>
          </div>
        </div>
        <div className=" third-container border-b">
          <div className="p-2 font-bold mx-2">Subscriptions</div>
          <div className=" p-2 mx-4">Channels</div>
          <div className=" p-2 mx-4">Channels</div>
          <div className=" p-2 mx-4">Channels</div>
          <div className=" p-2 mx-4">Channels</div>
          <div className="p-2 flex items-center">
            <span className="mx-2">Show More</span>
            <img
              alt="show-More"
              src={require("../img/down-arrow-icon.png")}
              className="w-5 invert mx-2"
            ></img>
          </div>
        </div>
        <div className="fourth-container border-b">
          <div className="font-bold p-2 mx-2">Explore</div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/trending-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">Trending</span>
          </div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/shopping-bag-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">Shopping</span>
          </div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/music-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">Music</span>
          </div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/movies-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">Movies</span>
          </div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/live-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">Live</span>
          </div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/gaming-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">Gaming</span>
          </div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/news-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">News</span>
          </div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/sports-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">Sports</span>
          </div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/courses-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">Courses</span>
          </div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/fashion-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">Fashion & beauty</span>
          </div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/podcast-icon.png")}
              className="w-5 invert mx-2"
            ></img>
            <span className="ml-4">Podcasts</span>
          </div>
        </div>
        <div className="border-b">
          <div className="p-2 font-bold mx-2">More From YouTube</div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/youtube-logo.png")}
              className="w-5 mx-2"
            ></img>
            <span className="ml-4">YoutTube Premium</span>
          </div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/Youtube-music-icon.png")}
              className="w-5 mx-2"
            ></img>
            <span className="ml-4">YouTube Music</span>
          </div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/youtube-kids-icon.png")}
              className="w-5 mx-2"
            ></img>
            <span className="ml-4">YouTube Kids</span>
          </div>
        </div>
        <div className="border-b">
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/settings-icon.png")}
              className="w-5 mx-2 invert"
            ></img>
            <span className="ml-4">Settings</span>
          </div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/report-icon.png")}
              className="w-5 mx-2 invert"
            ></img>
            <span className="ml-4">Report history</span>
          </div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/help-icon.png")}
              className="w-5 mx-2 invert"
            ></img>
            <span className="ml-4">Help</span>
          </div>
          <div className="p-2 flex items-center">
            <img
              alt="trending"
              src={require("../img/feedback-icon.png")}
              className="w-5 mx-2 invert"
            ></img>
            <span className="ml-4">Send feedback</span>
          </div>
        </div>
        <div className="p-2">
          <div className=" flex flex-wrap items-center justify-evenly text-xs font-bold text-gray-600">
            <p>About</p>
            <p>Press</p>
            <p>Copyright</p>
            <p>Contact us</p>
            <p>Creators</p>
            <p>Advertise</p>
            <p>Developers</p>
          </div>
          <div className=" mt-4 flex flex-wrap items-center justify-evenly text-xs font-bold text-gray-600">
            <p>Terms</p>
            <p>Privacy</p>
            <p>Policy & Safety</p>
            <p>How YouTube works</p>
            <p>Test new features</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
