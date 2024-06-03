import React from "react";
import { ReactComponent as LeftImage } from "../Assets/home_animation_left_background.svg"; 
import { ReactComponent as RightImage } from "../Assets/home_animation_right_background.svg"; 
import '../Components/HomePage/Home.css'; 
import Tarif from "../Components/HomePage/Tarif";
import Features from "../Components/HomePage/Features";
import Comments from "../Components/HomePage/Comments";
import Sections from "../Components/HomePage/Sections";
import Details from "../Components/HomePage/Details";
import DetailsInfo from "../Components/HomePage/DetailsInfo";
import Aide from "../Components/HomePage/Aide";
import Footer from "../Components/Footer/Footer";

function Home() {
    return (
      <div className="home-page">
        <div className="home-container">
            <LeftImage className="home-image left" />
            <div className="home-content">
                <Tarif/>
                <Features/>
               <Comments/>
               <Sections/>
               <Details/>
               <DetailsInfo/>
               <Aide/>
               <Footer/>
            </div>
            <RightImage className="home-image right" />
        </div>
        </div>
    );
}

export default Home;

