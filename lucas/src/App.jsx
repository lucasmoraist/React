import React from "react";
import MainRoutes from "./routes/Mainroutes";
import Menu from "./routes/Menu";

export default function App(){
    return(
        <div>
            <Menu/>
            <MainRoutes/>
        </div>
        
    )
}