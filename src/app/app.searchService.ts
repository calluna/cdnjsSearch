import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switchMap';

@Injectable()
//define string properties
export class SearchService {
  baseUrl: string = 'https://api.cdnjs.com/libraries';
  queryUrl: string = '?search=';

  constructor(private http: Http) { }

  search(terms: Observable<string>) {
    //wait until there’s no new data for the provided amount of time
    return terms.debounceTime(400)
      //ensure that only distinct data passes through
      .distinctUntilChanged()
      //combines multiple possible observables received from searchEntries into one to ensure use results from latest request only
      .switchMap(term => this.searchEntries(term));
  }

  searchEntries(term) {
    return this.http
        //get request to API endpoint with search term
        .get(this.baseUrl + this.queryUrl + term)
        //map the results to a Json object
        .map(res => res.json());
  }
}