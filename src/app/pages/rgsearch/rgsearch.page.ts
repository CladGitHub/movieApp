import { Component, OnInit } from '@angular/core';;
import { AudioSearchService } from '../../services/audio-search.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rgsearch',
  templateUrl: './rgsearch.page.html',
  styleUrls: ['./rgsearch.page.scss'],
})

export class RgsearchPage implements OnInit {

	results: Observable<any>;
	rgDB = null;

	constructor(private audioSearchService: AudioSearchService) {}
	
	searchInRG(word: string){
		this.audioSearchService.searchWord(word);
		this.results = this.audioSearchService.audioSearchResults;
	}

	ngOnInit() {	
		
	}

}
