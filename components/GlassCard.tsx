import {  ReactNode } from 'react';
import styles from'../app/page.module.css'
type GlassCardType = {
    children: ReactNode;
    showCard: boolean;
}

const GlassCard = ({children, showCard, }:GlassCardType) => {

    if(!showCard){
return null
    }
    return (
        <div
        className={styles.glassCard}
        style={{
            backdropFilter: `${showCard ? 'blur(10px)' : 'blur(0px)' 
            }`,
            WebkitBackdropFilter:`${showCard ? 'blur(10px)' : 'blur(0px)' 
            }`,
        
      }}
      >
            {children}
        </div>
    )
}

export default GlassCard