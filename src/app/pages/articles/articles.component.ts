import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { CRUDService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {
  articles:any[]=[];
  constructor(
    //private route:ActivatedRoute,
    private crudService: CRUDService,
  ) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params)
    this.crudService.getAllArticles().subscribe((articles)=>this.articles=articles);

  }

}
