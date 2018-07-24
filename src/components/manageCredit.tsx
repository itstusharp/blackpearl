import * as React from 'react';
import Tabs from './tabs';
import AddToCredit from './addToCredit';
import PayCredit from './payCredit';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

enum CustomerView {
  AddToCredit, PayCredit
}

interface IState {
  customerView: CustomerView;
}

interface IProps {
  credit: number,
  selectedAmount: number;
  error: string;
  onCreditChange: (amount: number) => void;
  onTabClicked?: () => void;
  onCancel: () => void;
}

class ManageCredit extends React.Component<IProps, IState> {

  constructor(props:IProps) {
    super(props);
    this.state = {
      customerView: CustomerView.AddToCredit
    }
  }

  public render() {    
    return (
      <div className="customer-box">
        <Tabs 
          data={[CustomerView.AddToCredit, CustomerView.PayCredit]} 
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
      case CustomerView.AddToCredit:
        return <AddToCredit {...this.props} />;
      case CustomerView.PayCredit:
        return <PayCredit {...this.props} />;
    }
  }

  private setCustomerView = (view: CustomerView): void => {
    
    if(this.props.onTabClicked){
      this.props.onTabClicked();
    }

    this.setState({
      customerView: view
    });
  }

  private renderTab(item: CustomerView): JSX.Element {
    return item === CustomerView.AddToCredit
      ? <span><FontAwesomeIcon icon="plus-circle" color="#ccc" /> Add</span>
      : <span><FontAwesomeIcon icon="minus-circle" color="#ccc" /> Pay</span>;
  }

}

export default ManageCredit;
