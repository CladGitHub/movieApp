import { Injectable } from '@angular/core';
import { SearchRGService } from './search-rg.service';
import { Observable } from 'rxjs';

type MyArrayType = Array<{id: number, audioID: string, rgDate: string, phraseTranscript: string, offset: string}>;

var searchResults: MyArrayType = [];

@Injectable({
  providedIn: 'root'
})
export class AudioSearchService {

	audioSearchResults: Observable<any>;
	rgDB = null;

	constructor(private searchRGService: SearchRGService) {
		this.searchRGService.loadEdition('/assets/json/rgDB.json').subscribe( data => { 
			this.rgDB = data; 
			console.log(this.rgDB);
		});
	}
	
	searchWord(word: string){
		var wordPosition = 0;
		var jobNameSplit: string[];
		var counter = 0;
		searchResults = [];
		this.rgDB.editions.forEach((edition) => {
			wordPosition = 0;
			edition.results.items.forEach((item) => {
				item.alternatives.forEach((alternative) => {
					if(alternative.content.toLowerCase() == word.toLowerCase()){
						//serch phrase start
						var startPosition = this.searchPhraseStartFromWord(wordPosition,edition.results.items);
						//serch phrase end
						var endPosition = this.searchPhraseEndFormWord(wordPosition,edition.results.items);
						//serch phrase start offset
						var startOffset = this.searchPhraseStartOffset(startPosition, edition.results.items);
						//write phrase
						var transcriptedPhrase = this.writePhraseTranscript(startPosition, endPosition, edition.results.items);
						
						var splittetJobName = edition.jobName.split('_');
						searchResults[counter] = {id: counter, audioID: splittetJobName[3], rgDate: splittetJobName[1], phraseTranscript: transcriptedPhrase, offset: startOffset};
						counter = counter+1;
					}
				});
				wordPosition = wordPosition+1;
			});
		});
		console.log("word \"" + word + "\" found " + counter + " times.");
		console.log(searchResults);
		this.audioSearchResults = searchResults;
	}

	searchPhraseStartFromWord(wordPosition: number, transcriptJSON: any):number {
		for (var i = wordPosition; i >= 0; i--){
			if (transcriptJSON[i].alternatives[0].content == '.' || transcriptJSON[i].alternatives[0].content == '!' || transcriptJSON[i].alternatives[0].content == '?'){
				return i+1;
			}
		}
	}
	searchPhraseEndFormWord(wordPosition: number, transcriptJSON: any):number {
		for (var i = wordPosition; i < transcriptJSON.length; i++){
			if (transcriptJSON[i].alternatives[0].content == '.' || transcriptJSON[i].alternatives[0].content == '!' || transcriptJSON[i].alternatives[0].content == '?'){
				return i;
			}
		}
	}
	searchPhraseStartOffset(startPosition: number, transcriptJSON: {}):string {
		return transcriptJSON[startPosition+1].start_time;
	}
	
	writePhraseTranscript (startPos: number, endPos: number, transcriptJSON: {}):string {
		var transcriptedPhrase = "";
		var cnt = 0;
		for (var i = startPos; i <= endPos; i++){
			if (transcriptJSON[i].alternatives[0].content != "." && transcriptJSON[i].alternatives[0].content != "!" && transcriptJSON[i].alternatives[0].content != "?" && transcriptJSON[i].alternatives[0].content != "," && transcriptJSON[i].alternatives[0].content != ";" && transcriptJSON[i].alternatives[0].content != ":"){
				if (cnt == 0) {
					transcriptedPhrase = transcriptJSON[i].alternatives[0].content;
				}
				else {
					transcriptedPhrase = transcriptedPhrase + " " + transcriptJSON[i].alternatives[0].content;
				}
			}
			else{
				transcriptedPhrase = transcriptedPhrase + transcriptJSON[i].alternatives[0].content;
			}
			cnt++;
		}
		return transcriptedPhrase;
	}

}
