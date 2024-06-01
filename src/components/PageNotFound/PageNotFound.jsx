import React from 'react';
import pnf from "../../images/pnf.jpg"
import "./PageNotFound.scss"

const PageNotFound = () => {
    return (
       <div className="container" > 
            <div>
                <img src={pnf} alt="not found" />
            </div>
        </div>
    );
};

export default PageNotFound;