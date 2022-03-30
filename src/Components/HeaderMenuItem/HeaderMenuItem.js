import React from 'react';
import {ReactComponent as HomeIcon} from '../../Assets/svg/menu-icons/home.svg';
import {ReactComponent as InboxIcon} from '../../Assets/svg/menu-icons/inbox.svg';
import {ReactComponent as ProductsIcon} from '../../Assets/svg/menu-icons/products.svg';
import {ReactComponent as InvoicesIcon} from '../../Assets/svg/menu-icons/invoices.svg';
import {ReactComponent as MessagesIcon} from '../../Assets/svg/menu-icons/messages.svg';
import {ReactComponent as CalendarIcon} from '../../Assets/svg/menu-icons/calendar.svg';
import {ReactComponent as CustomersIcon} from '../../Assets/svg/menu-icons/customers.svg';
import {ReactComponent as SettingsIcon} from '../../Assets/svg/menu-icons/settings.svg';

class HeaderMenuItem extends React.Component {

    renderIcon(param) {
        switch(param) {
            case 'HomeIcon':
                return <HomeIcon />
            case 'InboxIcon':
                return <InboxIcon />
            case 'ProductsIcon':
                return <ProductsIcon />
            case 'InvoicesIcon':
                return <InvoicesIcon /> 
            case 'MessagesIcon':
                return <MessagesIcon /> 
            case 'CalendarIcon':
                return <CalendarIcon /> 
            case 'CustomersIcon':
                return <CustomersIcon /> 
            case 'SettingsIcon':
                return <SettingsIcon />
            default:
                return "";
        }
    }

    render() {
        return (
            <li className={"Header__navigation-item "+this.props.extraClassNames}>
                <a href="javascript;">
                    <div className="Header__navigation-item-icon">
                        {this.renderIcon(this.props.icon)}
                    </div>
                    <span>{this.props.title}</span>
                </a>
            </li>
        );
    }
}
export default HeaderMenuItem;