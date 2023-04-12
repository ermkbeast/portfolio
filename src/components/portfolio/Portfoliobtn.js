import React from "react";
const Portfoliobtn = (props)=>{
    return(
        <div className="portfolio-btn">
            <a href={props.gitln} target="blank" className="portfolio-btn-primary">Github</a>
            <a href={props.live_link} target="blank" className="btn btn-primary">Live Demo</a>
        </div>
    )
}
export default Portfoliobtn