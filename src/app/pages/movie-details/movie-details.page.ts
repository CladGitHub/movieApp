import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RsisearchService } from 'src/app/services/rsisearch.service';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.page.html',
  styleUrls: ['./movie-details.page.scss'],
})
export class MovieDetailsPage implements OnInit {
  information = null;
  constructor(private activatedRoute: ActivatedRoute, private rsisearchService: RsisearchService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('id');

    this.rsisearchService.getDetails(id).subscribe( result => {
      console.log('details: ', result);
      this.information = result;
    })
  }

  openWebsite() {
    window.open(this.information.Website, '_blank');
  }

}
