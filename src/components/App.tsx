import Header from './header';
import * as React from 'react';
import './App.scss';
import ICustomer from '../models/customer'; 

interface IState {
  selectedCustomer?: ICustomer;
}

class App extends React.Component<{}, IState> {

  constructor(props: {}){
    super(props);
    this.state = {}
  }

  public render() {
    return (
      <div className="container">
        <Header selectedCustomer={this.state.selectedCustomer} />
        {this.getView()}    
      </div>
    );
  }

  private getView(): JSX.Element {
    
    return !this.state.selectedCustomer 
      ? <span>search</span>
      : <span>Add to Balance</span>
  }
}

export default App;
