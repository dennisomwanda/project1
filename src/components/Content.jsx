import React from "react";

import "./Styles/Content.css"

function Content(){

    return(
        <React.Fragment>

            <div className="content">
                <div className="name">
                    <div className="allHeading">
                        <h1>BUSINESS</h1>
                        <h1>DEVELOPMENT</h1>
                    </div>


                    <div className="details">
                        <p>“To be successful, you have to have your heart in your business,<br />
                        and your business in your heart. <br />
                        It’s very easy to be different but very difficult to be better.”</p>
                    </div>

                    <div className="socialMedia">
                        <p>all links to socila media will be displayed here <span>😒😒 </span></p>
                    </div>
                </div>
                <div className="imageContainer">
                    <img src="https://img.freepik.com/free-photo/businessmen-talking-desk_23-2147626600.jpg?semt=ais_hybrid" alt="Royalty" />
                </div>

            </div>
            


            
        </React.Fragment>
    )

}

export default Content;