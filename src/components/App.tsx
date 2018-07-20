import Header from './header';
import * as React from 'react';
import './App.scss';
import ICustomer from '../models/customer';
import AddToBalance from './addToBalance';
import Search from './search';

enum CustomerView {
  AddToBalance, PayBalance
}

interface IState {
  selectedCustomer?: ICustomer;
  customerView: CustomerView
}

class App extends React.Component<{}, IState> {

  constructor(props: {}){
    super(props);
    this.state = {
      customerView: CustomerView.AddToBalance,
      selectedCustomer: { email: "email@ding.com", balance: 0 }
    }
  }

  public render() {
    return (
      <div className="container">
        <Header selectedCustomer={this.state.selectedCustomer} />
        <Search customers={[]}/>
        {this.getView()}    
      </div>
    );
  }

  private getCustomerView(): JSX.Element {
    switch(this.state.customerView) {
      default:
      case CustomerView.AddToBalance:
        return <AddToBalance selectedCustomer={this.state.selectedCustomer} />;
      case CustomerView.PayBalance:
        return <span>PayBalance</span>;
    }
  }

  private getTabs(): JSX.Element {
    return (
      <div>
        <ul className="nav nav-tabs">
          <li><a href="#">Add</a></li>
          <li><a href="#">Pay</a></li>
        </ul>
        {this.getCustomerView()}
      </div>
    );
  }

  private getView(): JSX.Element {
    
    return !this.state.selectedCustomer 
      ? <span>search</span>
      : this.getTabs()
  }
}

export default App;
