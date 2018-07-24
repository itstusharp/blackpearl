import * as React from 'react';
import './search.scss';
import ICustomer from '../models/customer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

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
          <h1 className="text-center">
            <FontAwesomeIcon icon="coffee" color="#fed930" /><br/>
            Top Up your Credit!
          </h1>
          <h3 className="text-center" style={{marginBottom: 40 }}>
            ...or pay your debts
          </h3>
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
