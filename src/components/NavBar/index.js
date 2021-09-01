import React from 'react';
import css from './style.module.css'

const Navbar = ()=> {
    return <div className={css.NavBar}>
        <ul className={css.Menu}>
                
                    <a href="/all" className={css.link}><li> Бүгд</li></a>
                    <a href="/all"><li> Цаг үе</li></a>
                    <a href="/all"><li> Улс Төр</li></a>
                    <a href="/all"><li> ЭДийн засаг</li></a>
                    <a href="/all"><li> дэлхий</li></a>
                    <a href="/all"><li> Технологи</li></a>
                    <a href="/all"><li> Урлаг</li></a>
                    <a href="/all"><li> Спорт</li></a>
                    <a href="/all"><li> загвар</li></a>
                    <a href="/all"><li> Сонин хачин</li></a>
                    <a href="/all"><li> Фото</li></a>
                    <a href="/all"><li> видео</li></a>
                    <a href="/all"><li> зөвөлгөө</li></a>
        </ul >
        </div>
}
export default Navbar;