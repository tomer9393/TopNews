import { Component, OnInit } from '@angular/core';
import { Contact } from '../../models/contact';
import { ContactsService } from '../../services/contacts.service';

@Component({
  selector: 'app-contacts-list',
  templateUrl: './contacts-list.component.html',
  styleUrls: ['./contacts-list.component.css']
})
export class ContactsListComponent implements OnInit {

  contacts : Contact[] = [];  

  constructor(private contactsService : ContactsService
              ){}

  ngOnInit() {
    this.load();
  }

  load(){
    this.contactsService.getContacts().subscribe(data => {
      this.contacts = data;
    });
  }

  onCreate(){
    //this.currentArticleService.changeCurrentArticle(article);
    console.log("t");
  }

  onEdit(contact : Contact){
    //this.currentArticleService.changeCurrentArticle(article);
    console.log("A");
  }

  onDelete(contact : Contact){
    //this.currentArticleService.changeCurrentArticle(article);
    console.log("b");
  }
  
  onDetails(contact : Contact){
    //this.currentArticleService.changeCurrentArticle(article);
    console.log("c");
  }

  handlePanel(action : string){
    this.load();
  }
}
