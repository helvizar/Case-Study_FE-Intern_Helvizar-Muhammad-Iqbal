import React from "react";
import Navigation from "./Navigation";

function Header() {
    return(
        <header className="border-b p-3 flex justify-between items-center font-bold">
            <span className="font-bold">
                Fashion City
            </span>

            <Navigation /> 
        </header>
    )
}

export default Header;