import * as React from 'react';
import './header.scss';
import ICustomer from '../models/customer';

interface IProps {
  selectedCustomer?: ICustomer
}

class AddToBalance extends React.Component<IProps> {
  public render() {
    return (
      <div className="add-to-balance">
        add to balance
      </div>
    );
  }
}

export default AddToBalance;
