import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Book } from '../model/book';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-addbook',
  templateUrl: './addbook.component.html',
  styleUrls: ['./addbook.component.css']
})
export class AddbookComponent {
  searchForm: FormGroup;
  searchResults: Book;
  posts: any;
  bookArr: Book[];
  title:string='';
  // books: any[] = [];
  // book:Book[] =[];

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private service: ServicesService) {
    this.searchForm = this.formBuilder.group({
      title:'',
      author: '',
      series: '',
      lexile_min: null,
      lexile_max: null,
      selected_book_type: '',
      selected_categories: []
    });
  }

  async searchBooks() {
    
  const apiUrl = 'https://book-finder1.p.rapidapi.com/api/search';
  const headers = new HttpHeaders({
    'X-RapidAPI-Key': '9d4ea5d106mshfc3028aa6ce7d22p16ba87jsnc46fa8e62194',
    'X-RapidAPI-Host': 'book-finder1.p.rapidapi.com'
  });
  const params = new HttpParams()
    .set('title', this.title);
   
    try {
      const response = await this.http.get(apiUrl, { headers, params }).toPromise();
            console.log(response);
            this.bookArr = [];
            this.posts = response;
      for (let i = 0; i < this.posts['results'].length; i++) {
        this.searchResults = new Book();
        this.searchResults['isbn'] = this.posts['results'][i]['published_works'][0]['isbn'];
        this.searchResults['title'] = this.posts['results'][i]['title'];
        
        this.searchResults['author'] = this.posts['results'][i]['authors'];
        
        this.searchResults['pageCount'] = this.posts['results'][i]['published_works'][0]['page_count'];
        
        this.searchResults['summary'] = this.posts['results'][i]['summary'];
        this.searchResults['imageUrl'] = this.posts['results'][i]['published_works'][0]['cover_art_url'];
       
        this.searchResults['publishYear'] = this.posts['results'][i]['published_works'][0]['copyright'];
        
        this.searchResults['language'] = this.posts['results'][i]['language'];

        this.bookArr.push(this.searchResults)
         
    }
    } catch (error) {
      console.error(error);
    }
  }
}
