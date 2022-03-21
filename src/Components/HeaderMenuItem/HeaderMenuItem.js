import React from 'react';
import {ReactComponent as HomeIcon} from '../../Assets/svg/menu-icons/home.svg';
import {ReactComponent as InboxIcon} from '../../Assets/svg/menu-icons/inbox.svg';

class HeaderMenuItem extends React.Component {

    renderIcon(param) {
        switch(param) {
            case 'HomeIcon':
                return <HomeIcon />
            case 'InboxIcon':
                return <InboxIcon />
            default:
                return "";
        }
    }

    render() {
        return (
            <li className={"Header__navigation-item "+this.props.extraClassNames}>
                <a href="javascript;">
                    <div className="Header__navigation-item-icon">
                        {this.renderIcon(this.props.icon)};
                    </div>
                    <span>{this.props.title}</span>
                </a>
            </li>
        );
    }
}
export default HeaderMenuItem;