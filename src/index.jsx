import React from "react";
import ReactDOM  from "react-dom/client";
import Aplication from "./Aplication";

class App extends React.Component {
    render() {
        return (
            <React.Fragment>    
             <h1> საქართველო </h1>          
            <Aplication />
            </React.Fragment>
           
        );
    } 
}

var root = document.getElementById("root");
ReactDOM.createRoot(root).render(<App></App>);