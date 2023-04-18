function OverView(props){
    return(
        <div className="overview">
            <div className="overview-head">
                <p>{props.views}</p>
                <img src={props.src} alt="" />
            </div>
            <div className="overview-body">
                <p className="views">{props.viewsNo}</p>
                <div className="viewsPercent"><p className={props.percent}><img className="indicator" src={props.upDown} alt="" />{props.viewsPercent}%</p></div>
            </div>
        </div>
    )
}
export default OverView;