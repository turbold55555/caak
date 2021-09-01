import React from 'react';
import css  from './style.module.css';
import InfoDetail from '../InfoDetail'
import InfoDetail1 from '../InfoDetail1'
import InfoDetail2 from '../InfoDetail2'
import InfoDetail3 from '../InfoDetail2'
import trueIcon from '../../../assets/icons/Header/trueIcon.svg'
const Information3 = (props)=>{
    return (
        <div className={css.infoContaner}>
            <div className={css.infoTitle} >
                <button className={css.InfoText} onClick={()=>alert('Тренд мэдээнүүд үзэх')}>
                    <div className={css.Info2}> 
                        <span>Улс Төр</span>
                    <div>
                        <img src={trueIcon} alt="" /> Дагах
                    </div>
                    </div>
                       </button>
                <button className={css.InfoText} onClick={()=>alert('Цааш нь үзэх')} > Цааш үзэх </button>
            </div>
            <div className={css.InfoContainer}>
            <InfoDetail ConfirmInfo={props.ConfirmInfo} ClosemInfo={props.ClosemInfo} className={css.infoCon} />
            <InfoDetail1 ConfirmInfo={props.ConfirmInfo} ClosemInfo={props.ClosemInfo} className={css.infoCon} />
            <InfoDetail2 ConfirmInfo={props.ConfirmInfo} ClosemInfo={props.ClosemInfo} className={css.infoCon} />
            <InfoDetail1  ConfirmInfo={props.ConfirmInfo} ClosemInfo={props.ClosemInfo} className={css.infoCon} />
            <InfoDetail3 ConfirmInfo={props.ConfirmInfo} ClosemInfo={props.ClosemInfo} className={css.infoCon} />
            <InfoDetail ConfirmInfo={props.ConfirmInfo} ClosemInfo={props.ClosemInfo} className={css.infoCon} />
            </div>
          
        </div>
        
    ) 
    
}

export default Information3;