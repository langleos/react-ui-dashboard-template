import './App.scss';
import './reset.css';
import './webfonts.css';

function App() {
    return (
        <div className="App">
            <header className="Header">
                <div className="Header__logo">
                    <img src="/images/logo.svg" alt="" />
                </div>
                <div className="Header__menu-btn">
                    <span></span><span></span><span></span>
                </div>
            </header>
        </div>
    );
}

export default App;
