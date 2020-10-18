import { Component, OnInit } from '@angular/core';
import { IBooks } from 'src/app/domains/ibooks';
import { BooksService } from 'src/app/services/books.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-category-books',
  templateUrl: './category-books.component.html',
  styleUrls: ['./category-books.component.scss']
})
export class CategoryBooksComponent implements OnInit {

  criteria: string;
  data: IBooks[];

  constructor(private service: BooksService,
    private _search: SearchService) { }

  //constructor() { }

  ngOnInit(): void {
  }

}
