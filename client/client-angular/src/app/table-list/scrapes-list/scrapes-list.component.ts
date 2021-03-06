import { Component, Input, OnInit } from '@angular/core';
import { Scrape } from '../../models/scrape';
import { ScrapesService } from '../../services/scrapes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-scrapes-list',
  templateUrl: './scrapes-list.component.html',
  styleUrls: ['./scrapes-list.component.css']
})
export class ScrapesListComponent implements OnInit {

  scrapes : Scrape[] = [];  
  @Input() search: string = '';

  constructor(private scrapesService : ScrapesService,  private router: Router){}

  ngOnInit() {
    this.loadAll();
  }

  ngOnChanges(changes: String) {
    // changes.prop contains the old and the new value...
    if(this.search === "")
    { 
      this.loadAll();
    }
    else
    { 
      this.scrapesService.filter(this.search).subscribe(data =>{
        this.scrapes = data;
      })
    }
  }

  loadAll(){
    this.scrapesService.getScrapes().subscribe(data => {
      this.scrapes = data;
    });
  }

  onCreate(){
    this.router.navigateByUrl('/CreateScrape');
  }

  onEdit(scrape : Scrape){
    this.router.navigateByUrl('/EditScrape', { state: scrape });
  }
  onDelete(scrape : Scrape){
    this.scrapesService.deleteScrape(scrape._id).subscribe(data => {
            this.scrapes.splice(this.scrapes.indexOf(scrape),1);
    });
  }
  onDetails(scrape : Scrape){
    this.router.navigateByUrl('/DetailsScrape', { state: scrape });
  }

  onDeleteAll(){
    this.scrapesService.deleteAllScrape().subscribe(data => {
      this.loadAll();
    });
  }

  onScrape(){
    this.scrapesService.scrape().subscribe(data => {
      this.loadAll();
    });
  }
}
