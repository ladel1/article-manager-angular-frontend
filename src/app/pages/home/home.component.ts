import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { CRUDService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  article:Article;
  
  constructor(
    private crud:CRUDService,
  ) {
    this.article = new Article();
   }

  ngOnInit(): void {
    this.crud.getOneArticle(1).subscribe((article)=>{
      Object.setPrototypeOf(article,Article.prototype);
      this.article = article;                
    }); 
  }

}
