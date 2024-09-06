import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import HeartRateExample from "./examples/HeartRateExample";

function App() {
    return (
        <Router>
            <div className="App">
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/heart-rate">Heart Rate Sensor Example</Link>
                        </li>
                        {/* Weitere Menüeinträge können hier hinzugefügt werden */}
                    </ul>
                </nav>

                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/heart-rate" element={<HeartRateExample />} />
                    {/* Weitere Routen können hier hinzugefügt werden */}
                </Routes>
            </div>
        </Router>
    );
}

function Home() {
    return (
        <div>
            <h1>Welcome to the ANT+ Examples</h1>
            <p>Select an example from the menu to see it in action.</p>
        </div>
    );
}

export default App;
