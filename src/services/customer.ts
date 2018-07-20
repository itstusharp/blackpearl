
import { LocalStorage, StorageKey } from '../services/localStorage';
import ICustomer from '../models/customer';

export class Customer 
{
    private localStorage: LocalStorage;
    
    constructor(){
        this.localStorage = new LocalStorage();
    }

    public getCustomers(): ICustomer[]
    {
        return this.localStorage.getData(StorageKey.Customers);
    }

    public updateCustomers(customers: ICustomer): boolean
    {
        this.localStorage.setData(StorageKey.Customers, customers);
        return true;
    }

}