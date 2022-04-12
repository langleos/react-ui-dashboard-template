import React from 'react';
import {ReactComponent as UpIcon} from '../../Assets/svg/upicon.svg';
import {ReactComponent as DownIcon} from '../../Assets/svg/downicon.svg';
import {ReactComponent as SalesIcon} from '../../Assets/svg/salesicon.svg';
import {ReactComponent as ChartIcon} from '../../Assets/svg/charticon.svg';


class TileWithValueAndIcon extends React.Component {

    renderIcon(param) {
        switch(param) {
            case 'UpIcon':
                return <UpIcon />
            case 'DownIcon':
                return <DownIcon />
            case 'SalesIcon':
                return <SalesIcon />
            case 'ChartIcon':
                return <ChartIcon />
            default:
                return "";
        }
    }


    render() {
        return (
            <div className="TileItem TileItem--with-value-and-icon">
                <div className="TileItem__inner">
                    <div className="TileItem__content">
                        <p className="TileItem__title">{this.props.title}</p>
                        <p className="TileItem__value">{this.props.value}</p>
                    </div>
                    <div className="TileItem__icon">
                        {this.renderIcon(this.props.icon)}
                    </div>
                    <div className="TileItem__footer">
                        <p><span className={"color-"+this.props.footerTextValueColor}>{this.props.footerTextValue}</span> {this.props.footerTextText}</p>
                    </div>
                </div>
            </div>
        );
    }
}
export default TileWithValueAndIcon;