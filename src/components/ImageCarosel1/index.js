import React from "react";
import { Carousel } from "react-responsive-carousel";
// import { css } from "styled-components";
import css from './style.module.css'
import Flag from '../../assets/icons/Header/Flag.svg'
import sliderImg1 from '../../assets/icons/Header/sliderImg1.svg'
import Money from '../../assets/icons/Header/Money.svg'
import Women from '../../assets/icons/Header/Women.svg'
import Social from '../../assets/icons/Header/Social.svg'
import Ring from '../../assets/icons/Header/Ring.svg'
import MainIcon from '../../assets/icons/Header/MainIcon.svg'

export default (props) => (
  <div className={css.CarouselContainer}>
  <Carousel autoPlay className={`${css.className} `}>
    <div style={{height:'30px'}}>
      <img alt="" src={sliderImg1}  />
      <p className="legend">Зураг-1sada</p>
    </div>
    <div>
      <img alt="" src={Money} />
      <p className="legend">Зураг-2</p>
    </div>
    <div>
      <img alt="" src={Women} />
      <p className="legend">Зураг-3</p>
    </div>
    <div>
      <img alt="" src={Flag} />
      <p className="legend">Зураг-4</p>
    </div>
    {/* <div>
      <img alt="" src={Ring} />
      <p className="legend">Legend 5</p>
    </div>
    <div>
      <img alt="" src={MainIcon} />
      <p className="legend">Legend 6</p>
    </div> */}
    {/* <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-7.jpg" />
      <p className="legend">Legend 7</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-8.jpg" />
      <p className="legend">Legend 8</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-9.jpg" />
      <p className="legend">Legend 9</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-10.jpg" />
      <p className="legend">Legend 10</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-11.jpg" />
      <p className="legend">Legend 11</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-12.jpg" />
      <p className="legend">Legend 12</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-13.jpg" />
      <p className="legend">Legend 13</p>
    </div>
    <div>
      <img alt="" src="http://lorempixel.com/output/cats-q-c-640-480-14.jpg" />
      <p className="legend">Legend 14</p>
    </div> */}
  </Carousel>
  </div>
);
