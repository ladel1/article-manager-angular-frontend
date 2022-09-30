import { Component, OnInit } from '@angular/core';
import { Article } from 'src/app/models/article';
import { CRUDService } from 'src/app/services/crud.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private crud:CRUDService,) {

   }

  ngOnInit(): void {
    
 
  }

}
