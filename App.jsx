import { useState } from 'react'
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
   const [toggle, setToggle] = useState(false)

  return (
<div className={toggle ? "app lightmode-app":"app"}>
<div className='first-section'> 
    
    <div className='heading-container'>
    <div className='head-body'>
    <h1 className={toggle ? "lightmode-header":"h1"}> Social Media Dashboard</h1>
      <p>Total Followers: 23,004</p>
    </div>
    
     <div className='toggle-container'> <p>Dark Mode</p><div className={toggle ? 'slider lightmode-slider': "slider"}><button onClick={()=>{setToggle(!toggle)}} className={toggle ? "togglebtn lightmode-btn":"togglebtn"}></button></div></div>
    
    </div>
    
      <div className='card-container'> 
     
      <Card cardClass={toggle ?"card lightmode":"card "} classname="blue" src={facebook} Username={"nathanf"} followers={"FOLLOWERS"} followerAmount={toggle ?"follower-number lightmode-number":"follower-number"} followerNumbers={1987} percent={12} upDown={up}       percentage="percent-up"/>
      <Card  cardClass= {toggle ?"card lightmode":"card"} classname="lightblue" src={twitter} Username={"nathanf"} followers={"FOLLOWERS"} followerAmount={toggle ?"follower-number lightmode-number":"follower-number"}followerNumbers={1044} percent={99} upDown={up}   percentage="percent-up"/>
      <Card  cardClass= {toggle ?"card lightmode":"card"}  classname="ig" src={instagram} Username={"realnathanf"} followers={"FOLLOWERS"} followerAmount={toggle ?"follower-number lightmode-number":"follower-number"}followerNumbers={"11k"} percent={1099} upDown={up} percentage="percent-up"/>
      <Card  cardClass= {toggle ?"card lightmode":"card"}  classname="red" src={youtube} Username={"Nathan F."} followers={"SUSCRIBERS"} followerAmount={toggle ?"follower-number lightmode-number":"follower-number"}followerNumbers={8239} percent={144} upDown={down}   percentage="percent-down"/>
      </div>
      
<div><h2 className={toggle ? "lightmode-header":"h2"}>Overview - Today</h2></div>
<div className='overview-container'>
  <Overview overviewClass={toggle ?"overview lightmode":"overview"} views={"Page Views"} src={facebook} viewsNoClass={toggle ?"views lightmode-number": "views"} viewsNo={87} percent="percent-up" viewsPercent={3} upDown={up}/>
  <Overview overviewClass={toggle ?"overview lightmode":"overview"} views={"likes"} src={facebook} viewsNoClass={toggle ?"views lightmode-number": "views"} viewsNo={52} percent="percent-down" viewsPercent={2}  upDown={down}/>
  <Overview overviewClass={toggle ?"overview lightmode":"overview"} views={"likes"} src={instagram} viewsNoClass={toggle ?"views lightmode-number": "views"} viewsNo={5462} percent="percent-up" viewsPercent={2257} upDown={up}/>
  <Overview overviewClass={toggle ?"overview lightmode":"overview"} views={"profile Views"} src={instagram} viewsNoClass={toggle ?"views lightmode-number": "views"} viewsNo={"52k"} percent="percent-up" viewsPercent={1375} upDown={up}/>
</div>
<div className='overview-container'>
<Overview overviewClass={toggle ?"overview lightmode":"overview"} views={"Retweets"} src={twitter} viewsNoClass={toggle ?"views lightmode-number": "views"} viewsNo={87} percent="percent-up" viewsPercent={3} upDown={up}/>
  <Overview overviewClass={toggle ?"overview lightmode":"overview"} views={"likes"} src={twitter} viewsNoClass={toggle ?"views lightmode-number": "views"} viewsNo={507} percent="percent-up" viewsPercent={553} upDown={up}/>
  <Overview overviewClass={toggle ?"overview lightmode":"overview"} views={"likes"} src={youtube} viewsNoClass={toggle ?"views lightmode-number": "views"} viewsNo={107} percent="percent-down" viewsPercent={19} upDown={down}/>
  <Overview overviewClass={toggle ?"overview lightmode":"overview"} views={"Total Views"} src={youtube} viewsNoClass={toggle ?"views lightmode-number": "views"} viewsNo={1407} percent="percent-down" viewsPercent={12} upDown={down}/>

</div>
</div>


  </div>
  )
}

export default App
