import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Article } from 'src/app/models/article';
import { CRUDService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-add-article',
  templateUrl: './add-article.component.html',
  styleUrls: ['./add-article.component.css']
})
export class AddArticleComponent implements OnInit {

  articleForm :FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private crudService:CRUDService,
  ) { 
    this.articleForm = this.formBuilder.group({
      'nom':['',Validators.required],
      'prix':['',Validators.required]      
    });
  }

  ngOnInit(): void {
  }

  ajouterArticle(){
    if(!this.articleForm.invalid){
        this.crudService.addArticle(this.articleForm.value).subscribe(()=>{
          console.log("ok")
        });
    }
  }

}
