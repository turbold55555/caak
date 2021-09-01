
import './App.css';
import React,{useState} from 'react'
import Header from './components/Header'
import Information1 from './components/Info/Information1'
import Information2 from './components/Info/Information2'
import Information3 from './components/Info/Information3'
// import Carousel  from './components/ImageCarosel';
import IkonInfo1  from './components/IkonContainerInfo1';
import IkonInfo2  from './components/IkonContainerInfo2';
import "react-responsive-carousel/lib/styles/carousel.min.css";
function App() {
  const [confirm, SetConfirm] = useState(false);
  const ConfirmInfo = ()=>{
    SetConfirm(true);
    console.log(`-----------> ` , confirm)
  } 
  const ClosemInfo = ()=>{
    SetConfirm(false);
    console.log(`-----------> ` , confirm)
  } 
  return (
    <div className="App">
      {/* <header className="App-header"> */}
      <Header />
   
      <Information1 ConfirmInfo={ConfirmInfo} />
      <Information2 ConfirmInfo={ConfirmInfo} />
      <Information3 ConfirmInfo={ConfirmInfo} />
      <Information3 ConfirmInfo={ConfirmInfo} />
      <IkonInfo1  ConfirmInfo={ConfirmInfo} />
      <IkonInfo2   show={confirm} ClosemInfo={ClosemInfo} />

      {/* <Carousel  /> */}
    </div>
  );
}

export default App;
