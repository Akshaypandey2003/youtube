import React from 'react'
import Button from './Button'

const ButtonsList = () => {

  const btnList = ["All","Music","Ghazal","Gaming","Mixes","Thrillers","Dramedy","Thoughts","History","Mantras","Python","Live","Romance","watched","Religious","Technical","Medical","Ayurvade","Dancing","Nature"];
  return (
    <div className=' w-[98%] px-8'>
      <div className=' flex items-center overflow-x-scroll no-scrollbar'>
        {btnList.map((btn,id)=><Button key={id} name={btn}/>)}
      </div>
    </div>
  )
}
export default ButtonsList