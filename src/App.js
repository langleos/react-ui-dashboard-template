import './reset.css';
import './App.scss';
import './webfonts.css';
import HeaderMenuItem from './Components/HeaderMenuItem/HeaderMenuItem.js';

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
                <nav className="Header__navigation">
                    <ul>
                        <HeaderMenuItem icon="HomeIcon" title="Home" extraClassNames="Header__navigation-item--purple Header__navigation-item--active"/>
                        <HeaderMenuItem icon="InboxIcon" title="Inbox" extraClassNames="Header__navigation-item--red"/>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default App;
