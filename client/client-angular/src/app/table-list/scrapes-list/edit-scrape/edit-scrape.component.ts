import { Component, OnInit } from '@angular/core';
import { Scrape } from '../../../models/scrape';

import { ScrapesService } from '../../../services/scrapes.service';

import { ActivatedRoute, Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-edit-scrape',
  templateUrl: './edit-scrape.component.html',
  styleUrls: ['./edit-scrape.component.css']
})
export class EditScrapeComponent implements OnInit {

  
    scrape : Scrape = null;
  
    constructor(private scrapesService : ScrapesService, private router:Router, private activatedRoute:ActivatedRoute) {
      //this.router.getCurrentNavigation().extras.state;
    }

  ngOnInit(): void {
    this.scrape=history.state;
  }

  onUpdate(title: String, link: String, year: String, rating: String, genre: String, duration: String, img: String){
    this.scrape.title = title;
    this.scrape.link = link;
    this.scrape.rating = rating;
    this.scrape.year = year;
    this.scrape.genre = genre;
    this.scrape.duration = duration;
    this.scrape.img = img;

    this.scrapesService.updateScrape(this.scrape).subscribe(data => {
      this.scrape = data;
      this.router.navigate(['/table-list']);
    });
  }
}
