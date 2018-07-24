import * as React from 'react';
import Hr from './hr';
import './addToCredit.scss';

interface IProps {
  error: string;
  onCreditChange: (value: number)=>void;
  onCancel: () => void;
}

class AddToCredit extends React.Component<IProps> {

  private customCredit: React.RefObject<HTMLInputElement>;

  constructor(props: IProps){
    super(props);
    this.customCredit = React.createRef();
  }

  public render() {

    const numbers = [1,2,5];

    return (
      <div className="add-to-credit">
        <div className="buttons-container">
          {this.props.error !== "" ? (
            <div className="alert alert-danger">
              <strong>Error!</strong> {this.props.error}
            </div>
          ) : null}
          <div className="row">
            {numbers.map((n,i)=>(
              <div key={i} className="col">
                <button
                  className="btn btn-money btn-outline-gray btn-lg btn-block" 
                  onClick={()=>this.props.onCreditChange(n)}>
                  € <b>{n}</b>.00
                </button>
              </div>
            ))}
          </div>
          <Hr>Or</Hr>
          <div>
            <p className="text-center">Add another amount</p>
            <div className="row">
              <div className="col">
                <input
                  ref={this.customCredit}
                  type="number"
                  placeholder="Enter amount"
                  className="form-control form-control-lg" />
              </div>
              <div className="col">
                <button
                  className="btn btn-secondary btn-lg btn-block" 
                  onClick={this.addCustomCredit}>
                  Add to Credit
                </button>
              </div>
            </div>            
          </div>
        </div>        
      </div>
    );
  }

  private addCustomCredit = (): void => {
    if(this.customCredit.current) {
      const stringValue = this.customCredit.current.value;
      let value = parseFloat(stringValue);
      if(isNaN(value) || value < 0){
        value = 0;
      }
      this.props.onCreditChange(value);
    }
  }

}

export default AddToCredit;
