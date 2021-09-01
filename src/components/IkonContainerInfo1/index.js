import React from 'react'
import ikon from '../../assets/icons/Header/ikon.svg'
import Info from '../../assets/icons/Header/Info.svg'
import Detail from '../../assets/icons/Header/Detail.svg'
import ListInfo from '../ListInfo'
import css from './style.module.css'
import ImageCarosel from '../ImageCarosel'
const IkonInfo = ()=>{
    return (
        <div>
        <div className={css.infoConainer}>
            <div className={css.InfoLeft} >
                <div className={css.iconName}>
                        <img src={ikon} alt="" />
                        <span><strong>IKON.MN </strong> </span>
                    </div>
                    <div className={css.follow } style={{marginTop:'10px'}} onClick={()=>alert('Дагах')}>
                        <span> Дагах </span>
                        </div>
                    <div className={css.ikons}>
                        <img src={Info} alt="" />
                        <img src={Detail} alt="" />
                    </div>
                    <ListInfo />
                    <ListInfo />
                    <ListInfo />
                    <ListInfo />
                    <ListInfo />
                    {/* <input className={css.Comment} placeholder="Та сэтгэгдлээ Бичиж үлдээнэ үү">asdas</input> */}
                    <input className={css.Comment} placeholder="Та сэтгэгдлээ Бичиж үлдээнэ үү" type="text" name="name" />
            </div>
            <div className={css.ImageRight}>
                  
                     <div className={css.InfoTitle}>
                         
                     <strong>Зургаа хэтрүүлж засаад доог тохуу болсон инстаграмчдын хөгжилтэй төрх</strong>    </div>
                    <div className={css.InfoDetail}>Инстаграм сүлжээний хэрэглэгчид бараг бүгдээрээ шахуу бусдын нүдэнд хамгийн үзэсгэлэнтэй, өөгүй төгс төгөлдөр үзэгддэг гэхэд худлаа хэлсэн болохгүй л болов уу. Гэвч тэд үнэхээр бодит амьдрал дээрээ хүртэл гялалзсан толигор арьстай, хараа булаам гайхам сайхан бие галбиртай байх нь цөөн тохиолдолд л биелэлээ олдог.     </div>
                  <ImageCarosel />
            </div>
           
            </div>
             <div className={css.InfoBottom}>
             <div className={css.nowDayes}>
                  <span>#ЦАГ ҮЕ</span> </div>
             <button onClick={()=>alert('Дэлгэрэнгүй үзэх')}>Дэлгэрэнгүй үзэх...</button>
         </div>
         </div>
    );
}
export default IkonInfo