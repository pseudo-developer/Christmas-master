import React from 'react';
import './App.css';
import { BrowserRouter as Router, NavLink, Route, Switch } from 'react-router-dom';
import SecondPage from './pages/second';
import ChristmasPage from "./pages/christmas";
import MusicPlayer from "./MusicPlayer";
import CollagePage from "./pages/CollagePage";

function App() {
    return (
        <Router><MusicPlayer/>
            <Switch> {/* Use Switch to wrap your Routes */}
                <Route path="/secondpage" exact component={SecondPage} /> {/* Use component prop in Route */}
                <Route path="/christmas" exact component={ChristmasPage} />
                <Route path="/" exact component={Homepage} /> {/* Use component prop in Route */}
                <Route path="/collage" exact component={CollagePage} />
            </Switch>
        </Router>
    );
}

const Homepage = () => {
    return (
        <div className="container">

        </div>

    );
}

export default App;
