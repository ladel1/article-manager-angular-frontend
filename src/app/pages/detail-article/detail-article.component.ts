import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { CRUDService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-detail-article',
  templateUrl: './detail-article.component.html',
  styleUrls: ['./detail-article.component.css']
})
export class DetailArticleComponent implements OnInit {
  article:Article;
  constructor(
    private route: ActivatedRoute,
    private crudService:CRUDService
  ) {
    this.article = new Article();
   }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];
    this.crudService.getOneArticle(id).subscribe((article)=>{// HTTP response, recieve data from API 
      Object.setPrototypeOf(article,Article.prototype);
      this.article = article;                
    }); 
  }

}
