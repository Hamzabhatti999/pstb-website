import React from "react";
import Navigation from './navbar';
import Info from './homeInfo';
import Certificate from "./certification";
import { Route,Routes } from "react-router-dom";
export default function Home() {
    return (
        <>     
            {/* Home Page Layout */}
                <Navigation />
                <Info />
                <Routes>
                    <Route path="/certification" element={<Certificate />  }>   </Route>
                </Routes>
                 
                           
        </>
    )
}


