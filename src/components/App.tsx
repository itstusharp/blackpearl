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

  private setCustomerView(view: CustomerView): void {
    this.setState({
      customerView: view
    });
  }

  private addToBalance(value: number): void {
    console.log("addToBalance", value);
  }

  private getCustomerView(): JSX.Element {
    switch(this.state.customerView) {
      default:
      case CustomerView.AddToBalance:
        return <AddToBalance onClick={this.addToBalance} />;
      case CustomerView.PayBalance:
        return <span>PayBalance</span>;
    }
  }

  private getTabs(): JSX.Element {
    return (
      <div className="customer-box">
        <ul className="nav nav-tabs">
          <li className="nav-item">
            <a
              href="#"  
              className={`nav-link ${this.state.customerView === CustomerView.AddToBalance ? "active" : ""}`} 
              onClick={()=> this.setCustomerView(CustomerView.AddToBalance)}
            >
              Add
            </a>
            </li>
          <li className="nav-item">
          <a
              href="#"  
              className={`nav-link ${this.state.customerView === CustomerView.PayBalance ? "active" : ""}`} 
              onClick={()=> this.setCustomerView(CustomerView.PayBalance)}
            >Pay</a>
            </li>
        </ul>
        <div className="customer-box-container">
          {this.getCustomerView()}
        </div>
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
