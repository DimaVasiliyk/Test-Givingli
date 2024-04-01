import { Injectable } from "@angular/core";
import { GiphyItem, GiphyResponse } from "../models/gif-response.interface";

@Injectable({
    providedIn:'root'
})

export class MapService {
    constructor(){}

    public mapAllGifsList(item:GiphyResponse):Array<GiphyItem>{
        return item.data.map(elem => {
            return {
              title: elem.title,
              url: elem.images.downsized.url ,
              datetime:elem.import_datetime,
            };
        });
    }
}