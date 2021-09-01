import React from 'react';
import css from './style.module.css'
import CaakIcon from '../../../assets/icons/Header/CaakIcon.svg'
import Women from '../../../assets/icons/Header/Women.svg'
import Social from '../../../assets/icons/Header/Social.svg'
const InfoDetail3 = ()=> {
    return (
        <div className={css.InfoDetail} onClick={props.ConfirmInfo}>
            <div>
                <div className={css.infoTitle}>
                    <div> <img src={CaakIcon} alt="" /> </div>
                    <span> <strong> CAAK.MN</strong> </span>
                </div>
           <div className={css.Indfos}>
           Зургаа хэтрүүлж засаад доог тохуу болсон инстаграмчдын хөгжилтэй төрх
           </div>
              
            </div>
            <div className={css.infos2}> 
               <div>
               <img src={Women} alt="" />
                   </div>  
                   <div style={{display:'flex', justifyContent:'flex-end', marginBottom:"20px"}}>
                   <img src={Social} alt="" style={{width:'80px', height:'20px'}} />
                   </div> 
                
               
                </div>
            
            </div>
    );
}
export default InfoDetail3;