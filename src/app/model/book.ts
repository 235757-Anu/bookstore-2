export class Book {
    isbn: string;
    title: string; 
    author: string[];
    pageCount: number;
    summary: string;
    imageUrl: string; 
    publishYear: number;
    language: string;
  
  
    constructor() {
      this.isbn = '';
      this.title = '';
      this.author = [];
      this.pageCount = 0;
      this.summary = '';
      this.imageUrl = '';
      this.publishYear = 0;
      this.language = '';
    }
  }
  