import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { AudioSearchService } from 'src/app/services/audio-search.service';
import { Observable } from 'rxjs';

type MyArrayType = Array<{id: number, audioID: string, rgDate: string, phraseTranscript: string, offset: string}>;



@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information = null;
  audioSearchRes: Observable<any>;

  titolo : string = "";
  rgData : string = "";
  audioID : string = "";
  phraseTranscript : string = "";


  
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private audiosearch: AudioSearchService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    var audioSearchRes =  this.audiosearch.audioSearchResults[Number(id)];

    console.log("tento : ", audioSearchRes);
    console.log("ritento : ", audioSearchRes.phraseTranscript);
    this.phraseTranscript = audioSearchRes.phraseTranscript;
    this.audioID = audioSearchRes.audioID;
    this.rgData = audioSearchRes.rgDate;

    
    

  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}
