import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';

import { HomePageState } from 'src/app/core/storage/store/homepage.state';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent implements OnInit {
  @Select(HomePageState.getAllGif) gifs$!: Observable<any[]>;

  constructor() { }

  ngOnInit() {}

}
