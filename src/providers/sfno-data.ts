import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the SfnoData provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class SfnoData {

  constructor(public http: Http) {
    
  }

  getTaluk(){
    return this.http.get('http://sfnumber.azurewebsites.net/api/city')
    .map(res => res.json());
  }
getVillage(selectedVillage){
  console.log("from provider" + selectedVillage);
    return this.http.get('http://sfnumber.azurewebsites.net/api/village/'+ selectedVillage)
    .map(res => res.json());
  }

  getType(sfno, passedTaluk, selectedVillage){
    console.log(sfno, passedTaluk, selectedVillage);
    console.log("http://sfnumber.azurewebsites.net/api/type/"+passedTaluk+"/"+selectedVillage+"/"+sfno);
     return this.http.get("http://sfnumber.azurewebsites.net/api/type/"+passedTaluk+"/"+selectedVillage+"/"+sfno)
    .map(res => res.json());
  }
}
