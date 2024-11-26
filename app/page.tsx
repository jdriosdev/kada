'use client'
import GlassCard from "@/components/GlassCard";
import CivilMain from "@/components/CivilMain";
import { useState } from "react";
import CivilDressCode from "@/components/CivilDressCode";
import CivilPlace from "@/components/CivilPlace";
import CivilPhoto from "@/components/CivilPhoto";

import { PiDressFill, PiMapPinAreaFill , PiCameraFill, PiCalendarHeartFill, PiEyeSlashFill, PiEyeFill   } from "react-icons/pi";



export default function Home() {

  const [showCard, setShowCard] = useState(true)

  const menuItems = [{
    label: 'Invitation',
    icon: ()=> <PiCalendarHeartFill />,
    component: () => <CivilMain /> 
  },
  {
    label: 'Dress Code',
    icon: ()=><PiDressFill />,
    component: () => <CivilDressCode /> 
  },
  {
    label: 'Place',
    icon: ()=><PiMapPinAreaFill/>,
    component: () => <CivilPlace /> 
  },
  {
    label: 'Photo',
    icon: ()=><PiCameraFill />,
    component: () => <CivilPhoto/> 
  }]

const [itemToShow, setItemToShow] = useState(menuItems[0])



  return (
    <>
   
    <div 
    className="bg-body"
    style={{
      height: '120vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }} 
    > 
      
    </div>
    <button style={{
      position: 'absolute',
      top:'15px',
      left: '15px',
      padding: '10px',
      margin: '0 2px',
      backgroundColor: '#2A3663',
      border: 'none',
      fontSize: '1.5rem',
      borderRadius: '5px'
    }} onClick={()=> setShowCard(prev => !prev)}>{showCard ? <PiEyeSlashFill/> : <PiEyeFill />}</button>
    <GlassCard showCard={showCard}>
    
        {itemToShow.component()}

<div style={{
  borderTop: '1px solid white',
  padding: '10px 0',
  marginTop: '10px'
}}>
 {menuItems.map((item, index) => <button 
 style={{
  padding: '10px',
  margin: '0 2px',
  backgroundColor: '#2A3663',
  border: 'none',
  fontSize: '1.5rem',
  borderRadius: '5px'

 }}
 onClick={()=> setItemToShow(menuItems[index])} key={item.label}>
  {item.icon()}
 </button>)}
</div>
    </GlassCard>
    
    </>
  );
}
