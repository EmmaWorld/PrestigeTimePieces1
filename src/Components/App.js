import React, {useState} from "react";
import WelcomePage from "./WelcomePage";
import './App.css'
import Shop from "./Shop";

function App(){

    const [showWelcome, setShowWelcome] = useState('true')

    function showShop(){
        setShowWelcome('false')
    }

    return(
        <div id="mainDiv">
            {showWelcome==='true'? <WelcomePage handleClick={showShop}/> : <Shop />}
        </div>
       
    );
}

export default App;