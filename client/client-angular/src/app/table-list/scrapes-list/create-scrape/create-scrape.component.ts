import { Component, EventEmitter, OnInit, Output } from '@angular/core';
//import { Scrape } from '../../../models/scrape';
import { ScrapesService } from '../../../services/scrapes.service';

@Component({
  selector: 'app-create-scrape',
  //templateUrl: './create-scrape.component.html',
  //styleUrls: ['./create-scrape.component.css']
})
export class CreateScrapeComponent implements OnInit {

  @Output() panel = new EventEmitter<string>(); 

  constructor(private scrapesService : ScrapesService) { }

  ngOnInit(): void {
  }

  onScrape(){
    this.scrapesService.scrape().subscribe(() => {
      this.panel.emit("Refresh");
    });
  }
}
