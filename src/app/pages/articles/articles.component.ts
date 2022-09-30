import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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
    private router:Router,
  ) { }

  ngOnInit(): void {
    //console.log(this.route.snapshot.params)
    this.crudService.getAllArticles().subscribe((articles)=>this.articles=articles);
  }


  detail(id:number){
    this.router.navigate(['detail-article',id]);     
  }

  update(id:number){
    this.router.navigate(['modifier-article',id]);  
  }

  delete(id:number){
    this.crudService.deleteOneArticle(id).subscribe(()=>{
      //this.ngOnInit();
      this.articles.forEach((value,index)=>{
        if(value.id==id){
          this.articles.splice(index,1);
        }
      })
    });
  }


}
