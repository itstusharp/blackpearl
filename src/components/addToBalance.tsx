import * as React from 'react';

interface IProps {
  onClick: (value: number)=>void  
}

class AddToBalance extends React.Component<IProps> {

  public render() {
    const numbers = [1,2,5];
    return (
      <div className="add-to-balance">
        <div className="buttons-container">
          <div className="row">
            {numbers.map((n,i)=>(
              <div key={i} className="col">
                <button
                  className="btn btn-default btn-lg btn-block" 
                  onClick={()=>this.props.onClick(n)}>
                  € {n}
                </button>
              </div>
            ))}

          </div>
        </div>
        <hr />
        <div>custom value</div>
      </div>
    );
  }
}

export default AddToBalance;
