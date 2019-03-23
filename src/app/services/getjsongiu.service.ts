import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';






@Injectable({
  providedIn: 'root'
})
export class GetjsongiuService {

  // Here we import the File System module of node
  
  result : string[];
  test : Observable<any>;
  tmp : Promise<JSON>;
  constructor(private httpClient: HttpClient) { }


  splitmessages(x : string) {
    var messages = x.substring(1, x.length-1).split("},{");
    //console.log("message : " + messages);
    return messages;
  }

  jasonize ( s : string) {
    this.test = JSON.parse(s);
    console.log("test : " +  this.test);
    this.test.forEach(value=> {
      console.log( "tento : " + value.title);
      console.log(" ritento : " + value.text);
    })
  }

  showFilegiu( id : string )  {

   // and then:
    console.log("showfile") ; 
    this.httpClient.get("/assets/jsongiu/" + id + ".json", {responseType: 'text'}).subscribe(results => { 
      //console.log('RAW: ', results);
      this.jasonize( results) ;
      this.result = this.splitmessages( results );
      this.result.forEach(element => {
        //console.log("element: " + element);
        
      });
    //this.httpClient.get("/assets/jsongiu/11392221.json", {responseType: 'text'});
  });
}

  
  getgiu( id: string, ) {
  
    console.log(" result ", this.result);
    return this.result; 
  }

}
