import React from "react";
import '../Styles/FooterStyles.css'

import appStoreIcon from '../Images/AppStore.jpg'
import GoogleStoreIcon from '../Images/GooglePlay.jpg'

function Footer() {
    

    return (
        <div className="footer_container">

            <div className="footer_top_container">
                <h1 style={{alignSelf: "flex-start"}}>Sign up to our newsletters </h1>
                <div style={{display: "flex", alignSelf: "flex-start"}}>
                    <h2> Enter your email address to get started </h2>
                    <input placeholder="Your email" type="text" />
                    <button> SIGN UP </button>
                </div>


                <div style={{display: "flex", justifyContent: "center", gap: "10px"}}>
                    <h3> Contact us</h3> <h1> | </h1>
                    <h3> Help</h3> <h1> | </h1>
                    <h3>Privacy policy</h3> <h1> | </h1>
                    <h3>Cookie policy</h3> <h1> | </h1>
                    <h3>Terms & conditions</h3>
                </div>

                <div style={{width: "100%", borderBottom: "black solid 1px", marginTop: "-7px"}}>
                </div>

            </div>

            <div className="footer_bottom_container">

                <div style={{display: "flex", justifyContent: "center", gap: "10px", marginTop: "-4%"}}>
                        <h3> Advertise</h3> <h1> | </h1>
                        <h3> Write for us </h3> <h1> | </h1>
                        <h3>Events</h3> <h1> | </h1>
                        <h3>Science jobs</h3> <h1> | </h1>
                        <h3>Syndication</h3> <h1> | </h1>
                        <h3>RSS feeds</h3> 
                </div>

                <div style={{display: "flex", justifyContent: "center", gap: "10px", marginTop: "-3%"}}>
                        <h3> Gift subscriptions</h3> <h1> | </h1>
                        <h3> Student subscriptions </h3> <h1> | </h1>
                        <h3>Educational subscriptions</h3> <h1> | </h1>
                        <h3>Corporate subscriptions</h3> 
                </div>

                <button> COOKIE SETTINGS </button>

                <div style={{display: "flex", width: "100%", height: "100%", alignItems: "baseline", marginTop: "10PX", justifyContent: "center"}}>

                    <div style={{display: "flex", flexDirection: "column"}}>
                        <h4> GET THE APP </h4>
                        <img style={{width: "50%", height: "20%", marginTop: "-10px"}} alt="app store icon" src={appStoreIcon}/>
                    </div>

                    <img style={{width: "10%", height: "29%", alignSelf: "flex-start", marginTop: "32px", marginLeft: "-100px"}} alt="app store icon" src={GoogleStoreIcon}/>

                    <div style={{display: "flex", flexDirection: "column"}}>
                        <h4 style={{ marginLeft: "15px"}}> FOLLOW US</h4>


                        <div style={{display: "flex", marginLeft: "15px"}}>
                            
                            <div style={{backgroundColor: "#3b5998"}} className="center_icon">
                                <i class="fa fa-facebook fa-2x"></i>
                            </div>

                            <div style={{backgroundColor: "#00acee"}} className="center_icon">
                                <i class="fa fa-twitter fa-2x"></i>
                            </div>

                            <div style={{backgroundColor: "#00ff00"}} className="center_icon">
                                <i class="fa fa-linkedin fa-2x"></i>
                            </div>

                            <div style={{backgroundColor: "#ff4500"}} className="center_icon">
                                <i class="fa fa-reddit fa-2x"></i>
                        </div>

                        </div>


                    </div>


                </div>  



                <div style={{display: "flex", width: "100%", height: "20%", alignItems: "baseline"}}>
                    <h1 style={{alignSelf: "flex-start", fontSize: "15px"}}> © Copyright New Scientist Ltd. </h1>

                    <div style={{marginLeft: "auto", display: "flex"}}> 
                        <h4 style={{marginTop: "30px"}}> Back to top </h4> 
                        <i style={{fontSize: "25px"}} class="fa fa-arrow-up"> </i>
                    </div> 

                </div>

            </div>
        </div>
    )
}


export default Footer

