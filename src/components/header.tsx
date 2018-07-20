import * as React from 'react';
import './header.scss';
import ICustomer from '../models/customer';

interface IProps {
  selectedCustomer?: ICustomer
}

class Header extends React.Component<IProps> {
  public render() {
    const customer = this.props.selectedCustomer;
    return (
      <header className="main-header">
        <div className="logo" />
        <div className="customer-data">
          {customer ? <span>{customer.email} | balance: $ {customer.balance}</span> : null}
        </div>
      </header>
    );
  }
}

export default Header;
