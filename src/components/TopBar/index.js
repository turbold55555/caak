import React from 'react';
import css from './style.module.css'
import SearchIcon from '../../assets/icons/Header/SearchIcon.svg'
import Mainsvg from '../../assets/icons/Header/MainIcon.svg'
import Ring from '../../assets/icons/Header/Ring.svg'
// import StyleConfig from 'config/StyleConfig';
const TopBar = ()=> {
    return <div className={css.TopBar}>
             <div className="main-logo">
                <img
                  src={Mainsvg} style={{width:'173px',}}
                />
            </div>
            <div className={css.Search} >
                   <input className={css.SearchInput}
              placeholder="Эндээс бүхнийг хайж олох"
              className="search-input"
            />
             <button type="button" className={`btnsearch`} >
             <img
                  src={SearchIcon} style={{width:'30px',}}
                />
             </button>
            </div>
        {/* <div>Search</div> */}
        <div className={css.TopRight}> 
          <img src={Ring} alt="" />
          <button type="button" >Нэвтрэх</button>
        </div>
        

    </div>;
}  

export default TopBar