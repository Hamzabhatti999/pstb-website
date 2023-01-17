import React from "react";
import '../App.css'
import Navigation from './navbar';
import background from '../assets/banner.jpg';
import Info from './homeInfo';
import Certificate from "./certification";
export default function Home() {
    return (
        <>
            {/* Home Page Layout */}
           
                <Navigation />
                
                <Info />
            <Certificate />
        </>
    )
}


