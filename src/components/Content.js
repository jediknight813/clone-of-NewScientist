import React from "react";
import '../Styles/ContentStyles.css'


function Content() {


    return (
        <div className="content_container">
            <style>
                @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap');
            </style>
            

            <div className="content_grid">

                <div className="content_for_article">
                    <b style={{fontSize: "48px", marginBottom: "15px"}}> Ancient lake in Mars's Gale crater may have actually been a small pond </b>

                    <div style={{display: "flex", gridGap: "10px"}}>

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

                        <div className="center_icon">
                            <i class="fa fa-inbox fa-2x"></i>
                        </div>

                        <div className="center_icon">
                            <i class="fa fa-print fa-2x"></i>
                        </div>

                    </div>
                    
                    <p> <b> SPACE </b> 6 August 2021 </p>

                    <p style={{marginTop: "-1%"}}> By <a style={{color: "#00b3e5", textDecoration: "none"}} href=" "> Leah Crane </a> </p>

                    <img alt="mars lake" src="https://images.newscientist.com/wp-content/uploads/2021/08/06171920/06-aug_mars-sediments.jpg?width=800" />

                    <h4 style={{marginTop: "-0.2%"}}>The rocks inside Gale crater hint there may not have been a large lake there after all</h4>
                    <p style={{marginTop: "-2.4%", fontSize: "12px"}}> NASA/JPL-Caltech/University of Arizona </p>
                    
                    <p style={{fontSize: "20px"}}>
                        A purported ancient lake on Mars may have been far smaller than researchers thought. NASA’s Curiosity rover has been exploring Gale crater for more than eight years, and while early observations suggested the entire crater may once have been filled with water, a new analysis implies that it just had a series of ponds instead.
                    </p>

                    <p style={{fontSize: "20px"}}> 
                    Previous analyses of data from Curiosity have relied heavily on a measure called the chemical index of alteration to determine how rocks were weathered over time. Joseph Michalski at the University of Hong Kong and his colleagues have suggested that because this measure was developed for use on Earth, it may not be valid in the extreme Martian climate.
                    </p>

                    <p style={{fontSize: "20px"}}>
                    Instead, they analysed the concentrations of various compounds that are expected to change based on different types of weathering over time. They found that some of the layers of rock Curiosity examined did interact with water at some point in their past, but more are likely to have formed outside of the water.
                    </p>

                    <div style={{width: "100%", height: "3%", backgroundColor: "#f5f5f5", borderRadius: "5px"}}>
                        <p> <b> Read more: </b> <a href=" " style={{color: "#00b3e5", textDecoration: "none"}}> Microbes burping methane on Mars may be right next to NASA rover </a> </p>
                    </div>

                    <p style={{fontSize: "20px"}}>
                    “Over hundreds of metres of strata, it seems that the only layers that are demonstrably lacustrine [formed in a lake] are the lower few metres,” says Michalski. “Of the rocks visited by the rover… the fraction that is demonstrably lacustrine is something like 1 per cent.”
                    </p>

                    <p style={{fontSize: "20px"}}>
                        These rocks were mostly in the lowest few metres of <a href=" " style={{color: "#00b3e5", textDecoration: "none"}}> sediments in the crater</a>, suggesting the lake was not nearly as deep or extensive as we thought. “There was likely a small lake or more likely a series of small lakes in the floor of Gale crater, but these were shallow ponds,” says Michalski.
                    </p>

                    <p style={{fontSize: "20px"}}>
                    The rocks that didn't form in water appeared to be volcanic, so Michalski says that they may have formed out of ash from volcanic eruptions after the water in Gale crater had dried up. Observations by other Mars missions have hinted that these sediments were deposited by wind, not water, so this may solve that mismatch.
                    </p>

                    <p style={{fontSize: "15px"}}>
                        <b> Journal reference: Science Advances</b>, <a href=" " style={{color: "#00b3e5", textDecoration: "none"}}> DOI: 10.1126/sciadv.abh2687 </a>
                    </p>

                    <p style={{fontSize: "18px"}}>
                        Sign up to our free <a href=" " style={{color: "#00b3e5", textDecoration: "none"}}> Launchpad newsletter </a> for a voyage across the galaxy and beyond, every Friday
                    </p>

                    <div className="topic_buttons" style={{display: "flex", alignItems: "baseline"}}>
                        <b> More on these topics: </b>
                        <button> PLANETS </button>
                        <button> MARS </button>
                    </div>

                <div className="content_bottom"> 

                    <div style={{display: "flex", marginTop: "80px", gridGap: "17px"}}>

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

                        <div className="center_icon">
                            <i class="fa fa-inbox fa-2x"></i>
                        </div>

                        <div className="center_icon">
                            <i class="fa fa-print fa-2x"></i>
                        </div>

                    </div>

                    <img style={{width: "20%", height: "90%", marginTop: "9%", marginLeft: "8%"}} alt="article" src="https://images.newscientist.com/wp-content/uploads/2021/12/15165500/xmas-cover_uk.jpg?width=300&alt=New+Scientist+issue+3365+cover" />

                    <div className="newpaper_buttons" >
                        <button style={{backgroundColor: "#00b3e5", marginTop: "0%"}}> <b> SUBSCRIBE </b> </button>
                        <button style={{backgroundColor: "#20b2aa"}}> <b> VIEW IN APP </b> </button>
                        <button style={{backgroundColor: "red"}}> <b> BUY IN PRINT </b> </button>

                    </div>
                </div>

                <h1 style={{marginTop: "10%", fontFamily: "'Roboto', sans-serif"}}>MORE FROM NEW SCIENTIST</h1>
                    

                </div>






                <div className="sidebar">

                    <div className="sidebar_content">

                        <div className="sidebar_buttons">
                            <button> <b> TRENDING </b> </button>
                            <button> <b> LATEST </b> </button>
                            <button> <b> VIDEO </b> </button>
                            <button> <b> FREE </b> </button>
                        </div>  

                        <div className="sidebar_articles">

                            <div className="sidbar_article_content">
                                <a href="#1">2021 in review: When a brain blob in a dish grew a pair of 'eyes'</a>
                                <h1> 1 </h1>
                            </div>

                            <div className="sidbar_article_content">
                                <a href=" ">Dogs notice when computer animation violate Newton's laws of physics</a>
                                <h1> 2 </h1>
                            </div>

                            <div className="sidbar_article_content">
                                <a href=" ">Human brain cells in a dish learn to play Pong faster than an AI</a>
                                <h1> 3 </h1>
                            </div>
                            <div className="sidbar_article_content">
                                <a href=" ">'Near impossible' plant-growing technique could revolutionise farming</a>
                                <h1> 4 </h1>
                            </div>

                            <div className="sidbar_article_content">
                                <a href=" ">Fossilised dinosaur embryo found exquisitely preserved inside egg</a>
                                <h1> 5 </h1>
                            </div>


                        </div>

                    </div>

                </div>


            </div>


            <div className="extra_content"> 
                
                <div className="extra_content_item_box">
                    <h4 style={{position: "absolute", backgroundColor: "rgb(72, 73, 74)", marginTop: "0%", color: "white", padding: "10px 10px 10px 10px"}}> SPACE </h4>
                    <img style={{height: "40%"}} alt="space" src="https://images.newscientist.com/wp-content/uploads/2021/12/22155209/PRI_216077944.jpg?width=300" />
                    <h2 style={{marginTop: "0%"}}>At least 70 'rogue' planets spotted drifting in space without a star </h2>
                </div>

                <div className="extra_content_item_box">
                    <h4 style={{position: "absolute", backgroundColor: "rgb(72, 73, 74)", marginTop: "0%", color: "white", padding: "10px 10px 10px 10px"}}> SPACE </h4>
                    <img style={{height: "40%"}} alt="space" src="https://images.newscientist.com/wp-content/uploads/2021/12/20154247/PRI_215885960.jpg?width=300" />
                    <h2 style={{marginTop: "0%"}}>Sample of asteroid Ryugu brought to Earth is a strange dark colour </h2>
                </div>

                <div className="extra_content_item_box">
                    <h4 style={{position: "absolute", backgroundColor: "rgb(72, 73, 74)", marginTop: "0%", color: "white", padding: "10px 10px 10px 10px"}}> SPACE </h4>
                    <img style={{height: "40%"}} alt="space" src="https://images.newscientist.com/wp-content/uploads/2021/12/17151015/PRI_215498021.jpg?width=300" />
                    <h2 style={{marginTop: "0%"}}>Super-fast impacts may have made Venus an uninhabitable hellhole</h2>
                </div>

                <div style={{marginTop: "-0.5%"}} className="extra_content_item_box">
                    <h4 style={{position: "absolute", backgroundColor: "rgb(72, 73, 74)", marginTop: "0%", color: "white", padding: "10px 10px 10px 10px"}}> SPACE </h4>
                    <img style={{height: "40%"}} alt="space" src="https://images.newscientist.com/wp-content/uploads/2021/12/16151022/PRI_215371899.jpg?width=300" />
                    <h2 style={{marginTop: "0%", fontSize: "23px"}}>Large deposits of water found on Mars below the surface at the equator</h2>
                </div>

            </div>

        </div>
    )
}

export default Content