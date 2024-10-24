import React from "react";

import { FaFacebook } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";

import { FaWhatsapp } from "react-icons/fa";

import { FaLinkedin } from "react-icons/fa";

import "./Styles/Content.css"

function Content(props){

    return(
        <React.Fragment>

            <div className="content">
                <div className="name">
                    <div className="allHeading">
                        <h1 className="heading2">BUSINESS</h1>
                        <h1 className="heading3">DEVELOPMENT</h1>
                    </div>

                    <div className="details">
                        <p>“To be successful, you have to have your heart in your business,<br />
                        and your business in your heart. <br />
                        It’s very easy to be different but very difficult to be better.”</p>
                    </div>

                    <div className="socialMedia">

                        {/* 
                            Steps to follow using icons from FontAwesome
                            1. Run this commnad "npm i react-icon --save" -this will import icons from fontawesome servers
                            2. import the installed icons to your react component syntax as below
                                => " import {<Fa<iconName>} from react-icon/fa" 
                            3. Start using the imported icon as example shown "<h1><FaiconName/></h1> "
                        */}
                              <a href="https://www.facebook.com/Jamesmacharia"><h1 className="icons"><FaFacebook color="#e07a5f"/></h1></a>
                              <a href="https://twitter.com/"><h1 className="icons"><FaTwitter color="#e07a5f"/></h1></a>
                              <a href="https://wa.me/+254701634577?"><h1 className="icons"><FaWhatsapp color="#e07a5f"/></h1></a>
                              <a href="https://www.linkedin.com/"><h1 className="icons"><FaLinkedin color="#e07a5f"/></h1></a> 
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