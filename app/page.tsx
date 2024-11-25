
import styles from "./page.module.css";
import {Ballet, Quicksand} from 'next/font/google'

const ballet = Ballet({ subsets: ['latin'] })
const quicksand = Quicksand({ subsets: ['latin'] })

export default function Home() {
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
    <div
      style={{
      padding: '50px',
      display:'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
        height: '600px',
        width: '450px',
         

        border: '1px solid rgba(255, 255, 255, 0.3)',
        background: 'rgba(255, 255, 255, 0.1 )',
        borderRadius: '10px',
        boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        backdropFilter: 'blur(10px)',
        WebkitBackdropFilter: 'blur(10px)',
        position: 'absolute',
        top: '100px',
        left: ' calc(50vw - 225px)',
        
      }}
      >
        <h3 
        className={`${quicksand.className}`}
        style={{
          textAlign: 'center'
        }}
        >Two hearts, one love, and a lifetime together. You're invited!</h3>
        <h1  className={`${ballet.className} ${styles.names}`}>Karen & Daniel</h1>
        <p className={`${quicksand.className}`}>7 | December | 2024</p>
        <p className={`${quicksand.className}`}>1:30 PM</p>
        <p className={`${quicksand.className}`}>Oak Park Beach - Cronulla</p>
        <p className={`${quicksand.className}`}>Sydney</p>
        <a className={`${quicksand.className}`} href="https://www.google.com/maps/place/Oak+Park+Beach/@-34.0697111,151.155664,17z/data=!3m1!4b1!4m6!3m5!1s0x6b12c86f63a66963:0xf017d68f9f25a90!8m2!3d-34.0697111!4d151.155664!16s%2Fg%2F11bxfj7d70?entry=ttu&g_ep=EgoyMDI0MTExOS4yIKXMDSoASAFQAw%3D%3D" target="blank">Address Here!</a>


      </div>
    </>
  );
}
