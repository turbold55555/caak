import React from 'react';
import css from './style.module.css'
import gogoIcon from '../../../assets/icons/Header/gogoIcon.svg'
import Money from '../../../assets/icons/Header/Money.svg'
import Social from '../../../assets/icons/Header/Social.svg'
const InfoDetail2 = (props)=> {
    return (
        <div className={css.InfoDetail} onClick={props.ConfirmInfo}>
            <div>
                <div className={css.infoTitle}>
                    <div> <img src={gogoIcon} alt="" /> </div>
                    <span> <strong> GOGO.MN</strong> </span>
                </div>
           <div className={css.Indfos}>
           УИХ-ын дарга Г.Занданшатар том 
мөнгөн дэвсгэрт гүйлгээнд
гаргах талаар судлахыг 
Төв банканд даалгажээ
           </div>
              
            </div>
            <div className={css.infos2}> 
               <div>
               <img src={Money} alt="" />
                   </div>  
                   <div style={{display:'flex', justifyContent:'flex-end', marginBottom:"20px"}}>
                   <img src={Social} alt="" style={{width:'80px', height:'20px'}} />
                   </div> 
                
               
                </div>
            
            </div>
    );
}
export default InfoDetail2;