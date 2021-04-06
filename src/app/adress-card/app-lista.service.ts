import { Injectable } from '@angular/core';
import { LOCAL_STORAGE, StorageService } from 'ngx-webstorage-service';



@Injectable({
  providedIn: 'root'
})
export class AppListaService {

  constructor() { }

  public setItem(key: string, value: string) {
    localStorage.setItem(key, value);
  }

  public removeItem(key:string) {
    localStorage.removeItem(key);
  }

  public getItem(key: string){ 
    return localStorage.getItem(key)
  }

  public clear(){
    localStorage.clear(); 
  }

}
