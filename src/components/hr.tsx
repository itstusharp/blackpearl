import * as React from 'react';
import './hr.scss';

class Hr extends React.Component {

  public render() {
    
    return (
      <div className="custom-hr">
        <div className="hr-content">
          <div className="hr-left" />
          {this.props.children}
          <div className="hr-right" />
        </div>        
      </div>
    );
  }
}

export default Hr;
