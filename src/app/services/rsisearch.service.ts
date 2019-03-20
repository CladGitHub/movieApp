
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export enum SearchType {
  all= '',
  movie = 'movie',
  series = 'series',
  episode = 'episode'
}

@Injectable({
  providedIn: 'root'
})
export class RsisearchService {

  url = 'https://www.rsi.ch/rsi-api/app-news/search';
  // gli altri parametri della search sono  ?q=utrecht&rows=0
  constructor( private http: HttpClient) { }

  searchData( searchtext: string, type : SearchType): Observable<any> {
    return this.http.get(`${this.url}?q=${encodeURI(searchtext)}&rows=10`).pipe(
      map(results => {
        console.log('RAW: ', results)
        console.log('articles: ', results['articles'])
        return results['articles'];
      })
    )
  }



  
}
