import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Article } from 'src/app/models/article';
import { CRUDService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-update-article',
  templateUrl: './update-article.component.html',
  styleUrls: ['./update-article.component.css']
})
export class UpdateArticleComponent implements OnInit {
  articleForm :FormGroup;
  id: number;
  constructor(
    private formBuilder:FormBuilder,
    private crudService:CRUDService,
    private route:ActivatedRoute,
  ) { 
    this.id = this.route.snapshot.params["id"]

    this.articleForm = this.formBuilder.group({
      'nom':['',Validators.required],
      'prix':['',Validators.required]      
    });

    this.crudService.getOneArticle(this.id).subscribe((article)=>{// HTTP response, recieve data from API 
      Object.setPrototypeOf(article,Article.prototype);
      this.articleForm.controls["nom"].setValue(article.getNom());
      this.articleForm.controls["prix"].setValue(article.getPrix());    
    });

  }

  ngOnInit(): void {
  }

  updateArticle(){
    if(!this.articleForm.invalid){
        const article = {...this.articleForm.value,id: this.id }
        console.log(article);
        this.crudService.update(article).subscribe(()=>{
          console.log("ok")
        });
    }
  }

}
