import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddArticleComponent } from './pages/add-article/add-article.component';
import { ArticlesComponent } from './pages/articles/articles.component';
import { ContactComponent } from './pages/contact/contact.component';
import { DetailArticleComponent } from './pages/detail-article/detail-article.component';
import { HomeComponent } from './pages/home/home.component';
import { UpdateArticleComponent } from './pages/update-article/update-article.component';

const routes: Routes = [
  {path:'ajouter-article',component:AddArticleComponent},
  {path:'modifier-article/:id',component:UpdateArticleComponent},
  {path:'detail-article/:id',component:DetailArticleComponent},
  { path:'articles',component:ArticlesComponent},
  { path:'contact', component:ContactComponent},
  { path:'', component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
