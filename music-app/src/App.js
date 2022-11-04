import './app.css';
import Header from "./components/header";
import SignIn from "./components/SignIn";
import React, {useState} from "react";
import CardController from "./components/CardController";
import Switch from '@mui/material/Switch';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isOnline, setIsOnline] = React.useState(false)
  return (
    <div className="app">
        <Header/>
        {isLoggedIn === true ? (
            <>
            <p>You are logged in!</p>
                <CardController
                title = "Online Mode"
                description = 'Is this Online?'
                component={Switch}
                action={() => setIsOnline(!isOnline)}
                />
                <h4>System:</h4>
                {!isOnline && (
                        <p>Your application is offline. You won't be able to share or stream music to other devices.</p>
                    )}
        </>) : (<SignIn setIsLoggedIn={setIsLoggedIn} isLoggedIn={isLoggedIn} />)}
    </div>
  );
}

export default App;
