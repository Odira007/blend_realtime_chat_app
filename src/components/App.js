import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Login from "./Login"
import Register from "./Register";
import Chats from "./Chats"

import "./App.css"

const App = () => {

    // let sock = new WebSocket("wss://echo.websocket");
    // sock.onopen = function() {
    //     console.log("open")
    // }
    // sock.onmessage = function(e) {
    //     console.log('message received', e.data);
    //     sock.close();
    // };
   
    // sock.onclose = function() {
    //     console.log('closed');
    // };

    // const [state, setState] = useState({
    //     actions: sock,
    //     message: []
    // })
    
    return (
        <div>
            {/* <Router>
                <Routes>
                    <Route path="/" element={<Login />}>
                        
                    </Route>
                    <Route path="/Register" element={<Register />}>

                    </Route>
                </Routes>
            </Router> */}
            <Chats />
        </div>
    )
}
export default App;