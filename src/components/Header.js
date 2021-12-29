import React from "react";
import '../Styles/HeaderStyles.css'


function Header() {

    return (
        <div className="header_container">
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> 

            <div className="header_title">

                <div className="header_newsletter">
                    <a href=" ">
                        NEWSLETTERS
                    </a>
                    <a href="22">
                        Sign up to read our regular email newsletters
                    </a>
                </div>

                <h1 style={{fontSize: "50px", marginLeft: "-10%"}}> NewScientist</h1>

                <button> SUBSRCRIBE AND SAVE 69% </button>

            </div>

            <div className="header_buttons">

                <button> News </button>

                <button> Podcasts </button>

                <button> Video </button>

                <button> Technology </button>

                <button> Space </button>

                <button> Physics </button>

                <button> Health </button>

                <button> Physics </button>

                <button> Health </button>

                <button> Podcasts </button>

                <button> More <i class="fa fa-angle-double-down" /> </button>

                <button className="blue"> Shop </button>

                <button className="blue"> Courses </button>

                <button className="blue"> Events </button>

                <button className="blue"> Tours </button>

                <button className="blue"> Jobs </button>

                <button className="sign_in_button"> <i class="fa fa-user"> </i>  Sign In </button>

                <button className="search_button"> <i class="fa fa-search"></i> Search </button>

            </div>

        </div>
    )
}

export default Header