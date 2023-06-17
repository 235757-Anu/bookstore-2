import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/model/user'
import { Observable } from 'rxjs';
import { Book } from './model/book';


@Injectable({
    providedIn: 'root'
})
export class ServicesService{
    
  
    constructor(private http: HttpClient){ }
    postUser(data:any):
    Observable<Object>{
        return this.http.post('http://localhost:8000/api/v1/users/register',data);
    }
    bookArr:Book[] =[];

  setSearchData(data: Book) {
    this.bookArr.push(data);
  }

  getSearchData(): Book[]{
    return this.bookArr;
  }
 
}