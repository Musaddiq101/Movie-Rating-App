import React from 'react';
import pnf from "../../images/pnf.jpg"
import "./PageNotFound.scss"

const PageNotFound = () => {
    return (
       <div className="container" style={{display: "flex", justifyContent:"center"}} > 
            <div>
                <img src={pnf} alt="not found" style={{height:"100%", width:"100%"}}/>
            </div>
        </div>
    );
};

export default PageNotFound;