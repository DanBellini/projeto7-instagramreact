import React from "react-dom";
import Mobilebar from "./components/Mobilebar";
import Navbar from "./components/Navbar";
import Page from "./components/Page";

function App (){
    return(
        <div>
            <Navbar/>
            <Page />
            <Mobilebar/>
        </div>
    )
}

ReactDOM.render(<App />, document.querySelector(".root"));