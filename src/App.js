import './reset.css';
import './Assets/sass/App.scss';
import './webfonts.css';
import HeaderMenuItem from './Components/HeaderMenuItem/HeaderMenuItem.js';
import {ReactComponent as BellIcon} from './Assets/svg/bell.svg';
import {ReactComponent as HelpIcon} from './Assets/svg/help.svg';


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
                        <HeaderMenuItem icon="ProductsIcon" title="Products" extraClassNames="Header__navigation-item--blue-light"/>
                        <HeaderMenuItem icon="InvoicesIcon" title="Invoices" extraClassNames="Header__navigation-item--orange"/>
                        <HeaderMenuItem icon="MessagesIcon" title="Messages" extraClassNames="Header__navigation-item--yellow"/>
                        <HeaderMenuItem icon="CalendarIcon" title="Calendar" extraClassNames="Header__navigation-item--red"/>
                        <HeaderMenuItem icon="CustomersIcon" title="Customers" extraClassNames="Header__navigation-item--blue-light"/>
                        <HeaderMenuItem icon="SettingsIcon" title="Settings" extraClassNames="Header__navigation-item--orange"/>
                    </ul>
                </nav>
            </header>
            <main>
                <div className="Topbar">
                    <div className="Container">
                        <a href="javascript();" className='Topbar__item Topbar__notifications-btn'>
                            <BellIcon />
                        </a>
                        <a href="javascript();" className='Topbar__item Topbar__help-btn'>
                            <HelpIcon />
                        </a>
                        <a href="javascript();" className='Topbar__item Topbar__profile-btn'>
                            <img src="/images/profile-image.png" alt="" />
                            <p>Joe Doe</p>
                        </a>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
