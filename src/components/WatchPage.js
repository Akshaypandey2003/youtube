import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { closeMenu } from "../Utils/appSlice";
import { useSearchParams } from "react-router-dom";

const WatchPage = () => {
  const [searchParams] = useSearchParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(closeMenu());
  }, []);

  return( 
 <div className="text-white">
    <iframe
      width="560"
      height="315"
      src={"https://www.youtube.com/embed/"+searchParams.get("v")+"?si=iuMFh_oebMBucZwE"}
      title="YouTube video player"
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      referrerPolicy="strict-origin-when-cross-origin"
      allowFullScreen
    ></iframe>
  </div>
  )
};

export default WatchPage;
