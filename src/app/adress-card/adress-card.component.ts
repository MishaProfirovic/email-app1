import { Component, Input, OnInit } from '@angular/core';
import { User } from './user-module';
import { AppListaService } from './app-lista.service';

@Component({
  selector: 'app-adress-card',
  templateUrl: './adress-card.component.html',
  styleUrls: ['./adress-card.component.css']
})
export class AdressCardComponent implements OnInit {
  
  
  
  constructor(private appListaService : AppListaService ) {}

  public name : string ='';
  public email: string ='';

  public queryKey: string;
  public removeKey: string;

  public queryResult: string;
  public user = {name: this.name, email: this.email}

  public addUser(){
    this.user.name = this.name
    this.user.email = this.email;
    
    this.appListaService.setItem(this.name,  JSON.stringify(this.user))
  }

  public getPerson(nameToRemove:string){
    this.queryResult = this.appListaService.getItem(nameToRemove);
  }
  public deletePerson(nameToDelete:string){
     this.appListaService.removeItem(nameToDelete);
  }
  public reset(){
     this.appListaService.clear();
  }
  

      ngOnInit(): void {
  }
  

}
