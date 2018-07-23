import * as React from 'react';
import './addToBalance.scss';

interface IProps {
  error: string;
  onBalanceChange: (value: number)=>void;
  onCancel: () => void;
}

class PayBalance extends React.Component<IProps> {

  private amount: React.RefObject<HTMLInputElement>;

  constructor(props: IProps){
    super(props);
    this.amount = React.createRef();
  }

  public render() {

    return (
      <div className="add-to-balance">
        <div className="buttons-container">
          {this.props.error !== "" ? (
            <div className="alert alert-danger">
              <strong>Error!</strong> {this.props.error}
            </div>
          ) : null}
          <div>
            <p className="text-center">Pay your Balance now!</p>
            <div className="row">
              <div className="col">
                <input
                  ref={this.amount}
                  type="number"
                  placeholder="Enter amount"
                  className="form-control form-control-lg" />
              </div>
              <div className="col">
                <button
                  className="btn btn-secondary btn-lg btn-block" 
                  onClick={this.addCustomBalance}>
                  Add to Balance
                </button>
              </div>
            </div>            
          </div>
        </div>        
      </div>
    );
  }

  private addCustomBalance = (): void => {
    if(this.amount.current) {
      const value = this.amount.current.value;
      this.props.onBalanceChange(- parseInt(value, 10));
    }
  }

}

export default PayBalance;
