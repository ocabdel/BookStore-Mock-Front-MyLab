import { Component, OnInit } from '@angular/core';
import { IBooks } from 'src/app/domains/ibooks';
import { BooksService } from 'src/app/services/books.service';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss']
})
export class BooksComponent implements OnInit {

  criteria: string;
  data: IBooks[];

  constructor(private service: BooksService,
    private _search: SearchService) { }

  //constructor() { }

  ngOnInit(): void {
  }

}
