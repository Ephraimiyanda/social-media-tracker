function OverView(props){
    return(
        <div className={props.overviewClass}>
            <div className="overview-head">
                <p className="">{props.views}</p>
                <img src={props.src} alt="" />
            </div>
            <div className="overview-body">
                <p className={props.viewsNoClass}>{props.viewsNo}</p>
                <div className="viewsPercent"><p className={props.percent}><img className="indicator" src={props.upDown} alt="" />{props.viewsPercent}%</p></div>
            </div>
        </div>
    )
}
export default OverView;