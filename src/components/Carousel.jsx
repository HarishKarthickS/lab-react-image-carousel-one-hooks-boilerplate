import React, { useState } from "react";
import "./Carousel.css";
import { images } from "../data/CarouselData";

// you can research - how to use material ui
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos'
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

// complete the function below:
function Carousel() {
    let [currIndex,setCurrIndex] = useState(0);
    console.log("img",images)

    function moveBackward(){
        if(currIndex === 0){
            setCurrIndex(images.length-1);
        }
        else{
            setCurrIndex(currIndex-1);
        }
    }

    function moveForward(){
        if(currIndex === images.length-1){
            setCurrIndex(0);
        }
        else{
            setCurrIndex(currIndex+1);
        }
    }

    const myStyle ={
        backgroundImage:`url(${images[currIndex].img})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        backgroundSize:"100% 100%",
        height: "80vh",
        width: "42vw",
    }
    return(
        <div className="main-container" style={myStyle}>
            <div className="arrow">
                <ArrowBackIosIcon onClick={moveBackward}/>
            </div>
            <div className="Sub-container">
                <div className="Content">
                    <h2>{images[currIndex].title}</h2>
                </div>
                <div className="Content">
                    <h3>{images[currIndex].subtitle}</h3>
                </div>
            </div>
            <div className="arrow">
                <ArrowForwardIosIcon onClick={moveForward}/>
            </div> 
        </div>
    )
}

export default Carousel;