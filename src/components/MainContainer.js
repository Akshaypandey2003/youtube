import React from 'react'
import ButtonsList from './ButtonsList'
import VideoContainer from './VideoContainer'
import { useSelector } from 'react-redux';

const MainContainer = () => {

  const isMenuOpen = useSelector(store=> store.app.isMenuOpen);

  return (
    <div className= {isMenuOpen ?' w-[84%] h-screen pt-2':'w-[94%] h-screen pt-2'}>
       <ButtonsList/>
       <VideoContainer/>
    </div>
  )
}

export default MainContainer