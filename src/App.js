import './reset.css';
import './Assets/sass/App.scss';
import './webfonts.css';
import HeaderMenuItem from './Components/HeaderMenuItem/HeaderMenuItem.js';
import TileWithValueAndIcon from './Components/TileWithValueAndIcon/TileWithValueAndIcon.js';
import {ReactComponent as BellIcon} from './Assets/svg/bell.svg';
import {ReactComponent as HelpIcon} from './Assets/svg/help.svg';
import {ReactComponent as HomeIcon} from './Assets/svg/menu-icons/home.svg';



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
                <div className="PageHeader">
                    <div className="Container">
                        <h1>Home</h1>
                        <div className="Breadcrumbs">
                            <div className="Breadcrumbs__icon">
                                <HomeIcon />
                            </div>
                            <p>
                                <a href="javascript();">Home</a>
                                <span>-</span>
                                <a href="javascript();">Dashboard</a>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="PageContent">
                    <div className="Container">
                        <div className="TileItems TileItems--four-per-row">
                            <TileWithValueAndIcon icon="UpIcon" title="Total traffic" value="123,456" footerTextValue="+3.48%" footerTextText="Since last month" footerTextValueColor="green"/>
                            <TileWithValueAndIcon icon="DownIcon" title="New Users" value="3,456" footerTextValue="-3.48%" footerTextText="Since last month" footerTextValueColor="red"/>
                            <TileWithValueAndIcon icon="SalesIcon" title="Sales" value="456" footerTextValue="+3.48%" footerTextText="Since last month" footerTextValueColor="green"/>
                            <TileWithValueAndIcon icon="ChartIcon" title="Performance" value="48.5%" footerTextValue="+3.48%" footerTextText="Since last month" footerTextValueColor="green"/>
                        </div>
                        <div className="TileItems TileItems--three-one-per-row">
                            <div className="TileItem">
                                <div className="TileItem__header">
                                    <div className="TileItem__header-left-col">
                                        <p className="TileItem__title">Overview</p>
                                        <p className="TileItem__big-title">Sales Values</p>
                                    </div>
                                    <div className="TileItem__header-right-col">
                                        <a href="javascript();" className="btn btn--primary">Month</a>
                                        <a href="javascript();" className="btn btn--secondary">Week</a>
                                    </div>
                                </div>  
                                <div className="TileItem__content">
                                    <img src="/images/chart-1.png" alt="" />
                                </div>
                            </div>
                            <div className="TileItem">
                                <div className="TileItem__header">
                                    <div className="TileItem__header-left-col">
                                        <p className="TileItem__title">PERFORMANCE</p>
                                        <p className="TileItem__big-title">Total Orders</p>
                                    </div>
                                </div>  
                                <div className="TileItem__content">
                                    <img src="/images/chart-2.png" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
