import * as React from 'react';
import './search.scss';
import ICustomer from '../models/customer';

interface IProps {
  selectedCustomer?: ICustomer
}

class Search extends React.Component<IProps> {
  public render() {
    return (
     <div className = "input-box">
        <main>
            <label>
                Name:
                <input type="text" name="name"  />
            </label>
        </main>
        </div>
    );
  }
}

export default Search;
