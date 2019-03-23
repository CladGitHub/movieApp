import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from 'src/app/services/movie.service';
import { AudioSearchService } from 'src/app/services/audio-search.service';
import { Observable } from 'rxjs';
import { GetjsongiuService } from 'src/app/services/getjsongiu.service';

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
  source : string = "";
  offset : string = "";
  
  constructor(private activatedRoute: ActivatedRoute, private movieService: MovieService, private audiosearch: AudioSearchService, private getfilegiu: GetjsongiuService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    var audioSearchRes =  this.audiosearch.audioSearchResults[Number(id)];

    console.log("tento : ", audioSearchRes);
    console.log("ritento : ", audioSearchRes.phraseTranscript);
    this.phraseTranscript = audioSearchRes.phraseTranscript;
    this.audioID = audioSearchRes.audioID;
    console.log("audio ID = ", this.audioID)
    this.rgData = audioSearchRes.rgDate;
    this.offset = audioSearchRes.offset;
    
    this.source = "http://tp.srgssr.ch/p/rsi/inline?urn=urn:rsi:audio:" + this.audioID;
    
    console.log("passo da qui prima i prendere giuliano")
    this.getfilegiu.showFilegiu( this.audioID, this.offset );
   

  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}
