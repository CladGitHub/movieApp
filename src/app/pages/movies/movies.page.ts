import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
//import { SearchType, MovieService } from 'src/app/services/movie.service';
import { SearchType, RsisearchService } from 'src/app/services/rsisearch.service';
import { GetjsongiuService } from 'src/app/services/getjsongiu.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})


export class MoviesPage implements OnInit {

  results: Observable<any>;
  getjson: Observable<any>;

  searchTerm: string = '';
  type: SearchType = SearchType.all;
  information = null;
 /**
   * Constructor of our first page
   * @param movieService The movie Service to get data
   */
  constructor(private rsisearchService: RsisearchService, private getjsongiu: GetjsongiuService) { }
 
  ngOnInit() { 
    let id = "11392221";
    
    this.getjsongiu.showFilegiu( id );
    console.log( "il json vale : " +  this.getjsongiu.getgiu( id ));
    
  }
 
  searchChanged() {
    // Call our service function which returns an Observable
    this.results = this.rsisearchService.searchData(this.searchTerm, this.type);

    this.results.subscribe(res => {
      console.log('My results usando subscribe ', res);
      //this.information = res.shortURL;
    })
  }

  openWebsite( url : string) {
    console.log("parte openWebsite");
    window.open(url, '_blank');
  }
}
