import React from 'react';
import css from './style.module.css'
import TopBar from '../TopBar';
import Navbar from '../NavBar';
import BlackImg from '../../assets/icons/Header/BlackIcon.svg'
// import StyleConfig from 'config/StyleConfig';
const Header = ()=> {
    return <div className={css.Header}>
        <TopBar /> 
        <Navbar />
        {/* HEader */}
        <div className={css.BlackIcon} >
        <img
                  src={BlackImg}   style={{marginTop:'20px', width:'85px'}}
                />
                {/* <div>qwertfghjkhytrefsdf</div> */}
        {/* <img
                  src={BlackImg} 
                /> */}
        </div>
    
    </div>;
}  

export default Header