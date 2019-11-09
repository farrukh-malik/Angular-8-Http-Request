import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { error } from 'util';
import { reject } from 'q';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  urlApi: string;


  constructor(public http: HttpClient) {
    this.urlApi = "https://jsonplaceholder.typicode.com/todos/"; //1
  }

  addHeader() {
    let headers = new HttpHeaders().set('Content-Type', 'application/json');
    return headers;
  }

  public getDetails(): Promise<any> {

    return new Promise((resolve, reject) => {
      let data = this.http.get(this.urlApi, { headers: this.addHeader() }).toPromise();
      resolve(data);
      // resolve("Gud work"); //for testing is resolve running
    }).catch(error => {
      reject(error);
    })

  }


}
