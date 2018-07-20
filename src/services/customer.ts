
import { LocalStorage, StorageKey } from '../services/localStorage';
import ICustomer from '../models/customer';
import { customers } from '../mocks/customers';

export class Customer 
{
    private localStorage: LocalStorage;
    
    constructor(){
        this.localStorage = new LocalStorage();
        const currentCustomer = this.localStorage.getData(StorageKey.Customers);
        if(!currentCustomer){
            this.updateCustomers(customers);
        }
    }

    public getCustomers(): ICustomer[]
    {
        return this.localStorage.getData(StorageKey.Customers);
    }

    public updateCustomers(c: ICustomer[]): boolean
    {
        this.localStorage.setData(StorageKey.Customers, c);
        return true;
    }

}