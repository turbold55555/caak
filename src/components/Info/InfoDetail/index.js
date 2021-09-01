import React from 'react';
import css from './style.module.css'
import Ikon from '../../../assets/icons/Header/ikon.svg'
import Flag from '../../../assets/icons/Header/Flag.svg'
import Social from '../../../assets/icons/Header/Social.svg'
const InfoDetail = (props)=> {
    return (
        <div className={css.InfoDetail} onClick={(props.ConfirmInfo)}>
            <div>
                <div className={css.infoTitle}>
                    <div> <img src={Ikon} alt="" /> </div>
                    <span> <strong>IKON.mn</strong> </span>
                </div>
           <div className={css.Indfos}>
           АНУ-ын 45 их, дээд сургуулийн
            төлөөлөл оролцсон цахим
            үзэсгэлэн яармаг маргааш болно
           </div>
              
            </div>
            <div className={css.infos2}> 
                <img src={Flag} alt="" /> 
                <div style={{display:'flex',justifyContent:'flex-end', }}>
                    <img src={Social} alt="" style={{width:'120px', height:'20px'}} />
                </div>
                </div>
            
            </div>
    );
}
export default InfoDetail;