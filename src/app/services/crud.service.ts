import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  constructor(
    private http:HttpClient,
  ) { }


  public getOneArticle(id:number):Observable<Article>{
      return this.http.get<Article>("http://localhost:8080/DemoAPIRest/api/articles/"+id);
  }


}
