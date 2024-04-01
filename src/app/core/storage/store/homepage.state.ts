import { Injectable } from '@angular/core';
import { Action, Selector, State, StateContext, Store, } from '@ngxs/store';

import { HomePageService } from '../../servise/homePage.service';
import {GetAllGifs, GetSearchGif } from '../action/homepage.action';
import { GifInterface } from '../../models/gif.interface';


export class HomepageStateModel {
  gifs!: Array<GifInterface>;
  letter!: string;
}

@State<HomepageStateModel>({
  name: 'HomePageState',
  defaults: {
    gifs: [],
    letter: '',
  },
})

@Injectable()
export class HomePageState {
  constructor(private homePageService: HomePageService, private store: Store,) { }

  @Selector()
  static getAllGif(state: HomepageStateModel): Array<GifInterface> {
    return state.gifs;
  }

  @Action(GetAllGifs)
  public getAllGif(ctx: StateContext<HomepageStateModel>) {
    this.homePageService.getAllGifs().subscribe((data: any) => {
      ctx.patchState({
        gifs: data.data,
      });
    });
  }

  @Action(GetSearchGif)
  public getSearchGif(ctx: StateContext<HomepageStateModel>, { letter }: GetSearchGif) {
    this.homePageService.getSearchGif(letter).subscribe((data: any) => {
      ctx.patchState({
        gifs: data.data
      });
    });
  }
}