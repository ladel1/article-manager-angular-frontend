import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class CRUDService {

  private URL:string = environment.endpointAPI;

  constructor(
    private http:HttpClient,
  ) { }



  public getOneArticle(id:number):Observable<Article>{
      // HTTP REquest
      return this.http.get<Article>(this.URL+"articles/"+id);
  }

  public getAllArticles():Observable<any[]>{
    return this.http.get<any[]>(this.URL+"articles/");
  }


}
