import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  constructor() { }

  public set(key:string, value:any) {
    localStorage.setItem(key, JSON.stringify(value));
  }

  public get(key:string):any|null {
    var obj = localStorage.getItem(key);
    if(obj !== null) {
      return JSON.parse(obj);
    }
    return null;
  }

  public delete(key:string) {
    localStorage.removeItem(key);
  }

  public clear() {
    localStorage.clear();
  }
}
