import React from "react";
import Navigation from './navbar';
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


