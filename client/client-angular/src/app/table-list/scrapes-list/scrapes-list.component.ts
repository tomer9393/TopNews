import { Component, OnInit } from '@angular/core';
import { Scrape } from '../../models/scrape';
import { ScrapesService } from '../../services/scrapes.service';
//import { CurrentScrapeService } from 'src/app/services/current-scrape.service';

@Component({
  selector: 'app-scrapes-list',
  templateUrl: './scrapes-list.component.html',
  styleUrls: ['./scrapes-list.component.css']
})
export class ScrapesListComponent implements OnInit {

  scrapes : Scrape[] = [];  

  constructor(private scrapesService : ScrapesService){}

  ngOnInit() {
    this.load();
  }

  load(){
    this.scrapesService.getScrapes().subscribe(data => {
      this.scrapes = data;
    });
  }

  onEdit(scrape : Scrape){
    //this.currentScrapeService.changeCurrentScrape(scrape);
    console.log("A");
  }
  onDelete(scrape : Scrape){
    //this.currentScrapeService.changeCurrentScrape(scrape);
    console.log("b");
  }
  onDetails(scrape : Scrape){
    //this.currentScrapeService.changeCurrentScrape(scrape);
    console.log("c");
  }

  handlePanel(action : string){
    this.load();
  }

  onScrape(){
    this.scrapesService.scrape().subscribe(() => {
      this.load();
    });
  }
}
