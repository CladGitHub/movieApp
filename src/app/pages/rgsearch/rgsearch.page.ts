import { Component, OnInit } from '@angular/core';;
import { AudioSearchService } from '../../services/audio-search.service';
import { Observable } from 'rxjs';
type MyArrayType = Array<{id: number, audioID: string, rgDate: string, phraseTranscript: string, offset: string}>;

@Component({
  selector: 'app-rgsearch',
  templateUrl: './rgsearch.page.html',
  styleUrls: ['./rgsearch.page.scss'],
})

export class RgsearchPage implements OnInit {

	results: MyArrayType;
	rgDB = null;

	constructor(private audioSearchService: AudioSearchService) {}
	
	searchInRG(word: string){
		this.audioSearchService.searchWord(word);
		this.results = this.audioSearchService.audioSearchResults;
	}

	ngOnInit() {	
		
	}

}
