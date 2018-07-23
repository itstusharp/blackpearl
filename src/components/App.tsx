import Header from './header';
import * as React from 'react';
import './App.scss';
import ICustomer from '../models/customer';
import Search from './search';
import ManageBalance from './manageBalance';
import { Customer } from '../services/customer';

interface IState {
  selectedAmount: number;
  selectedCustomer?: ICustomer;
  customers: ICustomer[];
  countDown: number;
  error: string;
}

class App extends React.Component<{}, IState> {

  private customerService: Customer;
  private countDown: NodeJS.Timer;
  private duration: number = 4;
  private maxBalance: number = 30;

  constructor(props: {}){
    super(props);
    this.state = {
      countDown: 0,
      customers: [],
      error: "",
      selectedAmount: 0
    }

    this.customerService = new Customer();

  }

  public render() {

    return (
      <div className="container">
        <Header
          selectedAmount={this.state.selectedAmount}
          selectedCustomer={this.state.selectedCustomer} 
          onClick={this.backToHome}
        />
        {this.getView()}    
      </div>
    );
  }

  public componentWillUnmount(): void {
    clearInterval(this.countDown);
  }

  public componentDidMount(): void {
    this.setState({
      customers: this.customerService.getCustomers()
    })
  }

  private getView(): JSX.Element {

    if(!this.state.selectedCustomer) {
      return <Search customers={this.state.customers} onClick={this.setCustomer}/>;
    }

    if(this.state.selectedAmount) {
      return (
        <div className="customer-box">
          <div className="add-to-balance">
            <div className="buttons-container">
              <p className="text-center">
                You have just added € {this.state.selectedAmount} to you Balance.<br />
                Your current balance is<br />
                <b>€ {this.state.selectedAmount + this.state.selectedCustomer.balance}</b>
              </p>
              <button
                className="btn btn-outline-gray btn-lg btn-block" 
                onClick={this.abortUpdate}>
                Ops... wrong choice, cancel ({this.duration - this.state.countDown})
              </button>
            </div>        
          </div>
        </div>
      );
    }

    return (
      <ManageBalance
        error={this.state.error} 
        selectedAmount={this.state.selectedAmount}
        onCancel={this.abortUpdate}
        onBalanceChange={this.setAmount} />
    )

  }

  private backToHome = () => {
    this.setState({
      error: "",
      selectedCustomer: undefined
    });
  }

  private setCustomer = (customer: ICustomer): void => {
    this.setState({
      selectedCustomer: customer
    });
  }

  private setAmount = (amount: number): void => {
    if(this.state.selectedCustomer){

      const nextBalance = this.state.selectedCustomer.balance + amount;

      if(nextBalance > this.maxBalance) {
        this.setState({
          error: "Sorry, it's not possible to add the chosen amount, your Balance cannot exceed € 30.00"
        })
      } else if(nextBalance < 0) {
        this.setState({
          error: "Thanks! You are very generous! but it's not possible to pay the chosen amount, you can't pay more than your current balance"
        });        
      } else {
        this.setState({
          error: "",
          selectedAmount: amount
        }, () => {
          clearInterval(this.countDown);
          this.countDown = setInterval(this.updateCountDown, 1000);
        });
      }
    }
  }

  private updateCountDown = (): void => {
    if(this.state.countDown < this.duration) {
      this.setState({
        countDown: this.state.countDown + 1
      });
    } else {
      clearInterval(this.countDown);
      this.updateBalance()
    }
  }

  private updateBalance = (): void => {
    const selectedCustomer = this.state.selectedCustomer;
    if(selectedCustomer){
      selectedCustomer.balance += this.state.selectedAmount;
      this.setState({
        selectedCustomer
      }, ()=>{
        this.customerService.updateCustomers(this.state.customers);
        this.setState({
          countDown: 0,
          selectedAmount: 0,
          selectedCustomer: undefined,
        })
      });
    }
  }

  private abortUpdate = (): void => {
    clearInterval(this.countDown);
    this.setState({
      countDown: 0,
      selectedAmount: 0
    });
  }

}

export default App;
