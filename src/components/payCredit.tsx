import * as React from 'react';
import './addToCredit.scss';

interface IProps {
  error: string;
  credit: number;
  onCreditChange: (value: number)=>void;
  onCancel: () => void;
}

class PayCredit extends React.Component<IProps> {

  private amount: React.RefObject<HTMLInputElement>;

  constructor(props: IProps){
    super(props);
    this.amount = React.createRef();
  }

  public render() {

    return (
      <div className="add-to-credit">
        <div className="buttons-container">
          {this.props.error !== "" ? (
            <div className="alert alert-danger">
              <strong>Error!</strong> {this.props.error}
            </div>
          ) : null}
          <div>
            <p className="text-center">Pay your Credit now!</p>
            <div className="row">
              <div className="col">
                <input
                  defaultValue={this.props.credit.toString()}
                  ref={this.amount}
                  type="number"
                  placeholder="Enter amount"
                  className="form-control form-control-lg" />
              </div>
              <div className="col">
                <button
                  className="btn btn-secondary btn-lg btn-block" 
                  onClick={this.addCustomCredit}>
                  Pay
                </button>
              </div>
            </div>            
          </div>
        </div>        
      </div>
    );
  }

  private addCustomCredit = (): void => {
    if(this.amount.current) {
      const stringValue = this.amount.current.value;
      let value = parseFloat(stringValue);
      if(isNaN(value) || value<0){
        value = 0;
      }
      this.props.onCreditChange(- value);
    }
  }

}

export default PayCredit;
