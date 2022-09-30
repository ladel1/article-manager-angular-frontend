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

  public deleteOneArticle(id:number):Observable<any>{
    // HTTP REquest
    return this.http.get(this.URL+"articles/delete/"+id);
}

  public getAllArticles():Observable<any[]>{
    return this.http.get<any[]>(this.URL+"articles/");
  }

  public addArticle(data:any):Observable<any>{
    /**  HTTP
     * |------------------------------------------------------------|
     * | HEADERS "Content-Type","application/x-www-form-urlencoded" |
     * |------------------------------------------------------------|
     * | body 'nom=DELL PC&prix=500'                                |
     * -------------------------------------------------------------|
     */
    const body = new HttpParams({fromObject:data});
    return this.http.post(this.URL+"articles",body,{
        headers: new HttpHeaders()
                .set("Content-Type","application/x-www-form-urlencoded")
    });
  }


}
