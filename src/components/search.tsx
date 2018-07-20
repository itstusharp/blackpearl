import * as React from 'react';
import './search.scss';
import ICustomer from '../models/customer'

interface IProps {
  customers: ICustomer[]
}

interface IState {
  searchValue: string;
  filteredCutomers: ICustomer[]
}

class Search extends React.Component<IProps, IState> {
  constructor(props: IProps){
    super(props);
    this.state = {
    filteredCutomers:[],
    searchValue : ""
    }
  }
  public render() {
    return (
      <div className = "input-box">
        <label>
          Name:
        <input 
          type="text"
          name="name"
          value={this.state.searchValue}
          onChange={this.getCustomersFromLocalStorage}/>
        </label>
        </div>
        
    );
  }

  private getCustomersFromLocalStorage = (e:React.FormEvent<HTMLInputElement>) =>
  {
    const value = e.currentTarget.value;
    this.setState({
      searchValue: value
    })
  }
}

export default Search;
