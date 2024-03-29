import React, { useEffect, useState } from 'react'
import VideoCard from './VideoCard'
import { YT_VIDEOS_API } from '../Utils/constants';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

  const [videosData, setVideos] = useState([]);
  
  useEffect(()=>{
    getVideos();
  },[]);

const getVideos = async()=>{

  const data = await fetch(YT_VIDEOS_API);

  const json = await data.json();

  setVideos(json.items);
}
const filteredVideos = videosData.filter(video=>video.snippet.thumbnails.maxres);
console.log(filteredVideos);

  return (   
    <div className='h-full px-4 mt-4 flex flex-wrap overflow-y-scroll no-scrollbar'>

     { filteredVideos?.map((video)=> (
     <Link to={"/watch?v="+video.id}><VideoCard key = {video.id} data = {video}/></Link>))}
      
    </div>

  )
}

export default VideoContainer