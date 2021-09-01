import React from 'react';
import css from './style.module.css'
import Profile from '../../assets/icons/Header/Profile.svg'
const ListInfo = (props)=> {
    return (
        <div className={`${css.ListInfo} ${props.mystyle}`}>
            <div className={css.NameImage}>
                <img src={Profile} alt="" />
                <span> Алзахгүй эрдэнэцэцэг </span>
            </div>
            <div className={css.texts}>Баруун болон төвийн аймгуудын нутгаар үүлшинэ, бусад нутгаар солигдмол үүлтэй.</div>
        </div>
    );
}

export default ListInfo;