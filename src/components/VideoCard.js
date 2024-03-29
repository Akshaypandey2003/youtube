import React from "react";
import { useSelector } from "react-redux";

const VideoCard = ({ data }) => {
  const {snippet,statistics} = data;
  const { channelTitle, description, title } = snippet;
  const { url } = snippet?.thumbnails?.maxres;
  const { commentCount, likeCount, viewCount } = statistics;
  
  const isMenuOpen = useSelector(store=> store.app.isMenuOpen);

  return (

    <div className={isMenuOpen?"w-72  mx-2 mt-4":"w-80 mx-3 mt-4"}>
      <img
        alt="thumbnails"
        src={url}
        className=" w-full object-cover rounded-xl"
      ></img>
      <div className="text-white p-2 text-wrap">
        <p>{title}</p>
        <p>{channelTitle}</p>
        <p>{viewCount+" views"}</p>
      </div>
    </div>
  );
};

export default VideoCard;
