import * as React from 'react';
import './tabs.scss';

interface IProps {
    data: any[];
    selected: any;
    onClick: (item:any) => void;
    render?: (item: any) => JSX.Element;
}

class Tabs extends React.Component<IProps> {

    public render() {
        return (
            <ul className="nav nav-tabs">
               {this.props.data.map((item, i) => {
                   return (
                    <li className="nav-item" key={i}>
                        <a
                            href="#"  
                            className={`nav-link ${this.props.selected === item ? "active" : ""}`} 
                            onClick={()=> this.props.onClick(item)}
                        >
                            {this.props.render ? this.props.render(item) : item}
                        </a>
                    </li>
                   );
               })}
            </ul>
        );
    }
}

export default Tabs;
