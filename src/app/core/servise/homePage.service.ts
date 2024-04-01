import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class HomePageService {

    constructor(private http: HttpClient) { }

    public getAllGifs() {
        let  API_KEY = 'GS3gzUS0iTUI2ra9NZY8a6jGCS9KJ4T7';
        let test = '';
        const getAllpagesUrl = "https://api.giphy.com/v1/gifs/trending"
        return this.http.get(getAllpagesUrl, { 
            params: { 
                api_key: test, 
                limit:10
            } 
        });
    }

    public getSearchGif(letter: string) {
        let  API_KEY = 'GS3gzUS0iTUI2ra9NZY8a6jGCS9KJ4T7';
        const getAllpagesUrl = "https://api.giphy.com/v1/gifs/search"

        return this.http.get(getAllpagesUrl, { 
            params: { 
                api_key: API_KEY, 
                q:letter,
                limit:10
            } 
        });
    }
}
