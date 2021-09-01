import { div } from 'prelude-ls';
import React from 'react';
import css from './style.module.css'
import ImageCarosel1 from '../ImageCarosel1'
import Ikon from '../../assets/icons/Header/ikon.svg'
import SocialIcon1 from '../../assets/icons/Header/SocialIcon1.svg'
import SocialIcon2 from '../../assets/icons/Header/SocialIcon2.svg'
import SocialIcon3 from '../../assets/icons/Header/SocialIcon3.svg'
import CloseIcon from '../../assets/icons/Header/close.png'
import Shadow from '../Shadow'
import ListInfo from '../ListInfo'
const IkonInfo2 =(props)=>{
    return (
        <div>
        <Shadow  show={props.show} ClosemInfo={props.ClosemInfo}/>
        <div className={css.infoConainer} style={{transform:props.show ? 'translateY(0)' : 'translate(-200vh)' }}>
            <div className={css.InfoLeft}>
                <button className={css.CloseIcon} onClick={props.ClosemInfo}>
                    <img src={CloseIcon} alt=""  style={{width:'20px', height:'15px', display:'flex', justifyContent:'center', alignItems:'center'   }} />
                </button>
            <div className={css.InfoTitle}>
                         
                         <strong>Зургаа1 хэтрүүлж засаад доог тохуу болсон инстаграмчдын хөгжилтэй төрх</strong>    </div>
                         <div className={css.InfoDetail}>Инстаграм сүлжээний хэрэглэгчид бараг бүгдээрээ шахуу бусдын нүдэнд хамгийн үзэсгэлэнтэй, өөгүй төгс төгөлдөр үзэгддэг гэхэд худлаа хэлсэн болохгүй л болов уу. Гэвч тэд үнэхээр бодит амьдрал дээрээ хүртэл гялалзсан толигор арьстай, хараа булаам гайхам сайхан бие галбиртай байх нь цөөн тохиолдолд л биелэлээ олдог.     </div>
                  <ImageCarosel1  className={css.Carosel}/>
                 
                 <div className={css.nowDayes}>
                 <button onClick={()=>alert('Дэлгэрэнгүй үзэх')} style={{visibility:'hidden'}}>
                          Дэлгэрэнгүй үзэх...
                          </button>
                     </div> 
                      
            </div >
            <div  className={css.InfoRight}>
                <div className={css.RightIcon}>
                    <div>
                          <img src={Ikon} alt="" style={{width:'60px'}} />
                    </div>
                    <div className={css.IkonTitle}>
                    <div className={css.IkonMn}><span>IKON.MN</span></div>
                    <div className={css.follow}>
                    <span>Дагах</span></div>
                    </div>
                </div>
                <div className={css.icons}>
                <div>
                    <img src={SocialIcon1} alt="" />
                </div>
                <div>
                <img src={SocialIcon2} alt="" />
                </div>
                <div>
                <img src={SocialIcon3} alt="" />
                </div>
                </div>
                <ListInfo mystyle={css.mystyle} />
                <ListInfo mystyle={css.mystyle} />
                <ListInfo mystyle={css.mystyle} />
                {/* <ListInfo mystyle={css.mystyle} /> */}
                <div className={css.InfoBottom}>
             {/* <div className={css.nowDayes1} onClick={()=>alert('Цаг үе')}>
                  <span>#ЦАГ ҮЕ</span>
                   </div> */}
             
         </div>
                {/* <div className={css.Dot}>. . . </div> */}
            </div>
            
        </div>
        </div>
    );
}
export default IkonInfo2;