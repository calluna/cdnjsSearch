import { Component } from '@angular/core';
// Search
import { SearchService } from './app.searchService';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'app-root',
  templateUrl: '../assets/partials/app.component.html',
  styleUrls: ['../assets/css/app.component.css']
})
export class AppComponent {
  title = 'cdnJS search app';

  results: Object;
  searchTerm$ = new Subject<string>();

  constructor(private searchService: SearchService) {
    this.searchService.search(this.searchTerm$)
      .subscribe(results => {
        this.results = results.results;
      });
  }
}
