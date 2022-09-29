import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.css']
})
export class ArticlesComponent implements OnInit {

  constructor(
    private route:ActivatedRoute,
  ) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params)
  }

}
