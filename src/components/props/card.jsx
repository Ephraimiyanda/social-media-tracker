// import { useState } from "react";

function Card(props){
// const[theme, changeTheme]=useState(false)

return(
    <div className={props.cardClass}>
        <div className={props.classname}></div>
        <div className="handle">
            <img className="social-media-logo" src={props.src} alt="" />
            <p className="name">@{props.Username}</p>
        </div>
        <header className={props.followerAmount}>{props.followerNumbers}</header>
        <p className="followers">{props.followers}</p>
        <div className={props.percentage}><img className="indicator" src={props.upDown} alt="" />{props.percent}  Today</div>
    </div>
)
}
export default Card;
