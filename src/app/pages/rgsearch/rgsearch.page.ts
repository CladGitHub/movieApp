import { Component, OnInit } from '@angular/core';
import { SearchRGService } from '../../services/search-rg.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-rgsearch',
  templateUrl: './rgsearch.page.html',
  styleUrls: ['./rgsearch.page.scss'],
})

export class RgsearchPage implements OnInit {

	filePathList: string[] = ['/assets/json/RG/RG_01.03.2019_18-30_11392590.json','/assets/json/RG/RG_02.03.2019_18-30_11392221.json','assets/json/RG/RG_03.03.2019_18-30_11392509.json','/assets/json/RG/RG_04.03.2019_18-30_11398260.json','/assets/json/RG/RG_05.03.2019_18-30_11398491.json','/assets/json/RG/RG_06.03.2019_18-30_11398602.json','/assets/json/RG/RG_07.03.2019_18-30_11398377.json','/assets/json/RG/RG_08.03.2019_18-30_11403717.json','/assets/json/RG/RG_09.03.2019_18-30_11404725.json','/assets/json/RG/RG_10.03.2019_18-30_11418990.json','/assets/json/RG/RG_11.03.2019_18-30_11419302.json','/assets/json/RG/RG_12.03.2019_18-30_11419077.json','/assets/json/RG/RG_14.03.2019_18-30_11430693.json','/assets/json/RG/RG_15.03.2019_18-30_11430816.json','/assets/json/RG/RG_17.03.2019_18-30_11447819.json','/assets/json/RG/RG_18.03.2019_18-30_11478092.json'];
	rgDB = null;

	constructor(private searchRGService: SearchRGService) {}
	
	getStatus(){
		console.log("Loaded editions ("+ this.rgDB.editions.length +")");
		this.rgDB.editions.forEach((edition) => {
			console.log(edition.jobName);
		});
	}
	
	search(){
		this.searchWord('elezioni');
		this.searchWord('la');
		this.searchWord('radio');
		this.searchWord('ieri');
		this.searchWord('Lugano');
	}

	searchWord(word: string){
		var counter = 0;
		this.rgDB.editions.forEach((edition) => {
			edition.results.items.forEach((item) => {
				item.alternatives.forEach((alternative) => {
					if(alternative.content == word) counter = counter+1;
				});
			});
		});
		console.log("word \""+ word +"\" found "+ counter +" times");
	}

	ngOnInit() {	
	
		this.searchRGService.loadEdition('/assets/json/rgDB.json').subscribe( data => { 
			this.rgDB = data; 
			console.log(this.rgDB);
		});
		
	}

}
