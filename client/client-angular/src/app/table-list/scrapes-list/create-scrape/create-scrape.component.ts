import { Component, OnInit } from '@angular/core';
import { Scrape } from '../../../models/scrape';

import { ScrapesService } from '../../../services/scrapes.service';

import { Router } from '@angular/router';

@Component({
  selector: 'app-create-scrape',
  templateUrl: './create-scrape.component.html',
  styleUrls: ['./create-scrape.component.css']
})
export class CreateScrapeComponent implements OnInit {

  
    scrape : Scrape;  
  
    constructor(private scrapesService : ScrapesService, private router: Router) { }
  
    ngOnInit(): void {
    }
    
    onCreate(title: String, link: String, rating: String, genre: String, duration: String, img: String){
      this.scrapesService.addScrape(title, link, rating, genre, duration, img).subscribe(data => {
        this.scrape = data;
        this.router.navigate(['/table-list']);
      });
    }
}
