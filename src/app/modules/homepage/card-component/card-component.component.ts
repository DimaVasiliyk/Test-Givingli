import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Select, Store } from '@ngxs/store';
import { Observable } from 'rxjs';
import { GiphyItem, GiphyResponse } from 'src/app/core/models/gif-response.interface';

import { HomePageState } from 'src/app/core/storage/store/homepage.state';

@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.scss']
})
export class CardComponentComponent{
  @Select(HomePageState.getAllGif) gifs$!: Observable<Array<GiphyItem>>;

  constructor() { }
}
