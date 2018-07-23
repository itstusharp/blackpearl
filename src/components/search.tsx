import * as React from 'react';
import './search.scss';
import ICustomer from '../models/customer'

interface IProps {
  customers: ICustomer[];
  onClick: (customer: ICustomer) => void;
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
      <div className="input-box-container">
        <div className="input-box">
          <div className="input-group input-group-lg">
            <div className="input-group-prepend">
              <span className="input-group-text" id="inputGroup-sizing-lg">@</span>
            </div>
            <input 
              type="text"
              name="name"
              placeholder="Enter your Ding Email"
              className="form-control"
              aria-label="Large"
              value={this.state.searchValue}
              onChange={this.getCustomersFromLocalStorage}/>
            <div className="input-group-append">
              <span className="input-group-text" id="inputGroup-sizing-lg">></span>
            </div>
          </div>
          {this.state.filteredCutomers.length > 0 ? (
            <ul className="search-results">
              {this.state.filteredCutomers.map((f, i) => (
                <li key={i}>
                  <a href="#" onClick={()=>this.props.onClick(f)}>{f.email}</a>
                </li>
              ))}
            </ul>
          ) : null}
        </div>        
      </div>
        
    );
  }

  private getCustomersFromLocalStorage = (e:React.FormEvent<HTMLInputElement>) =>
  {
    const searchValue = e.currentTarget.value;
    const filteredCutomers = searchValue === "" ? [] : this.props.customers.filter(c => c.email.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1);
    
    this.setState({
      filteredCutomers,
      searchValue
    })
  }
}

export default Search;
