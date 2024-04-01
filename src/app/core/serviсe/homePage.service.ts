import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroment';
import { Observable, map } from 'rxjs';
import { GiphyItem, GiphyResponse } from '../models/gif-response.interface';
import { MapService } from './map.service';


@Injectable()
export class HomePageService {

    constructor(private http: HttpClient, private mapService:MapService) { }

    public getAllGifs():Observable<Array<GiphyItem>>  {
        const getAllpagesUrl:string = environment.baseUrl + 'trending';

        return this.http.get<GiphyResponse>(getAllpagesUrl, { 
            params: { 
                api_key: environment.API_KEY, 
                limit:10
            } 
        }).pipe(map((item:GiphyResponse) => this.mapService.mapAllGifsList(item)));
    }


    public getSearchGif(letter: string):Observable<Array<GiphyItem>> {
        const getAllpagesUrl:string = environment.baseUrl + 'search';
        return this.http.get<GiphyResponse>(getAllpagesUrl, { 
            params: { 
                api_key: environment.API_KEY, 
                q:letter,
                limit:10
            }
        }).pipe(map((item:GiphyResponse) => this.mapService.mapAllGifsList(item)));
    }
}