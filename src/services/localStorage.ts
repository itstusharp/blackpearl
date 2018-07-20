export enum StorageKey {
    Customers
}

export class LocalStorage {

    public setData(key: StorageKey, obj: any): boolean {

        window.localStorage.setItem(StorageKey[key], JSON.stringify(obj));
        return true;
    }

    public getData(key: StorageKey): any
    {
        const item = window.localStorage.getItem(StorageKey[key]) || '';
        if(item){
            return JSON.parse(item);
        }
            
        return null;
    }
}