import * as React from 'react';
import './header.scss';
import ICustomer from '../models/customer';

interface IProps {
  selectedAmount: number;
  selectedCustomer?: ICustomer,
  onClick: ()=>void
}

class Header extends React.Component<IProps> {
  public render() {
    const customer = this.props.selectedCustomer;
    return (
      <header className="main-header">
        <div className="logo" onClick={this.props.onClick}/>
        <div className="customer-data">
          {customer ? <span>{customer.email} | Credit: $ {customer.credit + this.props.selectedAmount}</span> : null}
        </div>
      </header>
    );
  }
}

export default Header;
