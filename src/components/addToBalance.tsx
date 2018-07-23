import * as React from 'react';
import Hr from './hr';
import './addToBalance.scss';

interface IProps {
  error: string;
  onBalanceChange: (value: number)=>void;
  onCancel: () => void;
}

class AddToBalance extends React.Component<IProps> {

  public render() {

    const numbers = [1,2,5];

    return (
      <div className="add-to-balance">
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
                  onClick={()=>this.props.onBalanceChange(n)}>
                  € <b>{n}</b>.00
                </button>
              </div>
            ))}
          </div>
          <Hr>Or</Hr>
          <div>
            <div className="row">
              <div className="col">
                <input className="form-control form-control-lg" />
              </div>
              <div className="col">
                <button
                  className="btn btn-secondary btn-lg btn-block" 
                  onClick={()=>this.props.onBalanceChange(10)}>
                  Add to Balance
                </button>
              </div>
            </div>            
          </div>
        </div>        
      </div>
    );
  }
}

export default AddToBalance;
