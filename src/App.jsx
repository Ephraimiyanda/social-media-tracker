// import { useState } from 'react'
import Card from './components/props/card'
import Overview from "./components/props/overview";
import './index.css'
import facebook from '/images/icon-facebook.svg'
import instagram from "/images/icon-instagram.svg"
import twitter from "/images/icon-twitter.svg"
import youtube from "/images/icon-youtube.svg"
import up from "/images/icon-up.svg"
import down from "/images/icon-down.svg"
function App() {
  // const [count, setCount] = useState(0)

  return (
<div className='app'>
<div className='first-section'> 
    
    <div className='heading-container'>
    <div className='head-body'>
    <h1> Social Media Dashboard</h1>
      <p>Total Followers: 23,004</p>
    </div>
    
     <div className='toggle-container'> <p>Dark Mode</p><button className='togglebtn'></button></div>
    
    </div>
    
      <div className='card-container'> 
     
      <Card  classname="blue" src={facebook} Username={"nathanf"} followers={"FOLLOWERS"} followerNumbers={1987} percent={12} upDown={up}       percentage="percent-up"/>
      <Card  classname="lightblue" src={twitter} Username={"nathanf"} followers={"FOLLOWERS"} followerNumbers={1044} percent={99} upDown={up}   percentage="percent-up"/>
      <Card  classname="ig" src={instagram} Username={"realnathanf"} followers={"FOLLOWERS"} followerNumbers={"11k"} percent={1099} upDown={up} percentage="percent-up"/>
      <Card  classname="red" src={youtube} Username={"Nathan F."} followers={"SUSCRIBERS"} followerNumbers={8239} percent={144} upDown={down}   percentage="percent-down"/>
      </div>
    
</div>

<div className='second-section'>
<h2>Overview - Today</h2>
<div className='overview-container'>
  <Overview views={"Page Views"} src={facebook} viewsNo={87} percent="percent-up" viewsPercent={3} upDown={up}/>
  <Overview views={"likes"} src={facebook} viewsNo={52} percent="percent-down" viewsPercent={2}  upDown={down}/>
  <Overview views={"likes"} src={instagram} viewsNo={5462} percent="percent-up" viewsPercent={2257} upDown={up}/>
  <Overview views={"profile Views"} src={instagram} viewsNo={"52k"} percent="percent-up" viewsPercent={1375} upDown={up}/>
  <Overview views={"Retweets"} src={twitter} viewsNo={87} percent="percent-up" viewsPercent={3} upDown={up}/>
  <Overview views={"likes"} src={twitter} viewsNo={507} percent="percent-up" viewsPercent={553} upDown={up}/>
  <Overview views={"likes"} src={youtube} viewsNo={107} percent="percent-down" viewsPercent={19} upDown={down}/>
  <Overview views={"Total Views"} src={youtube} viewsNo={1407} percent="percent-down" viewsPercent={12} upDown={down}/>
</div>

</div>
  </div>
  )
}

export default App
