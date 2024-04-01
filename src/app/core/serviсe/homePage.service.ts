import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/enviroment';
import { Observable } from 'rxjs';
import { GiphyResponse } from '../models/gif-response.interface';


@Injectable()
export class HomePageService {

    constructor(private http: HttpClient) { }

    public getAllGifs():Observable<GiphyResponse>  {
        const getAllpagesUrl = "https://api.giphy.com/v1/gifs/trending";

        return this.http.get<GiphyResponse>(getAllpagesUrl, { 
            params: { 
                api_key: environment.API_KEY, 
                limit:10
            } 
        });
    }

    public getSearchGif(letter: string):Observable<GiphyResponse> {
        const getAllpagesUrl = "https://api.giphy.com/v1/gifs/search"
        return this.http.get<GiphyResponse>(getAllpagesUrl, { 
            params: { 
                api_key: environment.API_KEY, 
                q:letter,
                limit:10
            } 
        });
    }
}
