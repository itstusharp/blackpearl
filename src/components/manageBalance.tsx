import * as React from 'react';
import Tabs from './tabs';
import AddToBalance from './addToBalance';
import PayBalance from './payBalance';


enum CustomerView {
  AddToBalance, PayBalance
}

interface IState {
  customerView: CustomerView;
}

interface IProps {
  onBalanceChange: (amount: number) => void;
  onCancel: () => void;
  selectedAmount: number;
  error: string;
}

class ManageBalance extends React.Component<IProps, IState> {

  constructor(props:IProps) {
    super(props);
    this.state = {
      customerView: CustomerView.AddToBalance
    }
  }

  public render() {    
    return (
      <div className="customer-box">
        <Tabs 
          data={[CustomerView.AddToBalance, CustomerView.PayBalance]} 
          onClick={this.setCustomerView} 
          selected={this.state.customerView}
          render={this.renderTab}
        />
        <div className="customer-box-container">
          {this.getCustomerView()}
        </div>
      </div>
    );
  }

  private getCustomerView(): JSX.Element {
    switch(this.state.customerView) {
      default:
      case CustomerView.AddToBalance:
        return <AddToBalance {...this.props} />;
      case CustomerView.PayBalance:
        return <PayBalance {...this.props} />;
    }
  }

  private setCustomerView = (view: CustomerView): void => {
    this.setState({
      customerView: view
    });
  }

  private renderTab(item: CustomerView): JSX.Element {
    return item === CustomerView.AddToBalance ? <span>Add</span> : <span>Pay</span>;
  }

}

export default ManageBalance;
