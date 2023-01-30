import React from "react";
import './info.css'
export default function information() {
    return (<>
        {/* Home page information */}
        <div className="top-section" id="info">
        <div className="container">
            <div className="main-text">
            <h1 className="heading-text">Pakistan Software <br /> Testing Board</h1>
            <div className="btn-group" role='group' aria-label="Info" >
                <button type="button" className="btn btn-outline-primary infobtn">More Info</button>
            </div>
            </div>
        </div>
        </div>
       
    </>)
}