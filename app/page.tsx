'use client'
import GlassCard from "@/components/GlassCard";
import CivilMain from "@/components/CivilMain";
import { useState } from "react";
import CivilDressCode from "@/components/CivilDressCode";
import CivilPlace from "@/components/CivilPlace";
import CivilPhoto from "@/components/CivilPhoto";


export default function Home() {

  const [showCard, setShowCard] = useState(true)

  const menuItems = [{
    label: 'Invitation',
    icon: '',
    component: () => <CivilMain /> 
  },
  {
    label: 'Dress Code',
    icon: '',
    component: () => <CivilDressCode /> 
  },
  {
    label: 'Place',
    icon: '',
    component: () => <CivilPlace /> 
  },
  {
    label: 'Photo',
    icon: '',
    component: () => <CivilPhoto/> 
  }]

const [itemToShow, setItemToShow] = useState(menuItems[0])



  return (
    <>
   
    <div 
    className="bg-body"
    style={{
      height: '100vh',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center'
    }} > 
      
    </div>
    <button style={{
      position: 'absolute',
      top:'15px',
      left: '15px',
      padding: '10px',
      margin: '0 2px',
      backgroundColor: '#2A3663',
      border: 'none',
      fontSize: '1rem'
    }} onClick={()=> setShowCard(prev => !prev)}>{showCard ? 'Show Photo' : 'Show Details'}</button>
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
  fontSize: '1rem'

 }}
 onClick={()=> setItemToShow(menuItems[index])} key={item.label}>{item.label}</button>)}
</div>
    </GlassCard>
    
    </>
  );
}
