import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { Book } from '../model/book';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-listbook',
  templateUrl: './listbook.component.html',
  styleUrls: ['./listbook.component.css']
})
export class ListbookComponent {

  @Input() books:Book[] ;

  book: Book;
  flag:number =0;

  constructor(private service: ServicesService,  private http: HttpClient) {
    console.log("inside List")
    // this.books = this.service.bookArr;
    // console.log("inside list books" +this.books);
  }
  toFav(b:Book){
    this.book = new Book();
    this.book.isbn = b.isbn;
    this.book.title = b.title;
  
    this.book.author = b.author;
    
    this.book.pageCount = b.pageCount;
    
    this.book.summary = b.summary;
    this.book.imageUrl = b.imageUrl;
    
    
    this.book.publishYear = b.publishYear;

    this.book.language = b.language;
    
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    
    const apiUrl = 'http://localhost:8100/api/v1/admin/books/add';
    console.log(this.book);
     this.http.post<Book>(apiUrl,this.book,httpOptions).subscribe(data => console.log(data));

  }

}
