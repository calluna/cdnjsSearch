import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

import { SearchService } from './app.searchService';
import { PagerService } from './app.pagerService';


@Component({
  selector: 'app-root',
  templateUrl: '../assets/partials/app.component.html',
  styleUrls: ['../assets/css/app.component.css']
})
export class AppComponent {
  title = 'cdnJS search app';

  private results: any[];
  searchTerm$ = new Subject<string>();

  // pager object
  pager: any = {};
 
  // paged items
  pagedItems: any[];

  //subscribe to the searchService.search Observable, assign the results to a property called results
  constructor(private searchService: SearchService, private pagerService: PagerService) {}
  ngOnInit(){
  	this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
        // initialize to page 1
        this.setPage(1);
      });
  }

  setPage(page: number) {
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }
 
        // get pager object from service
        this.pager = this.pagerService.getPager(this.results.length, page);
 
        // get current page of items
        this.pagedItems = this.results.slice(this.pager.startIndex, this.pager.endIndex + 1);
    }
}
