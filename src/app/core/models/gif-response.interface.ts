export interface GiphyMeta {
    status: number;
    msg: string;
    response_id: string;
}

export interface GiphyPagination {
    total_count: number;
    count: number;
    offset: number;
}

export interface GiphyResponse {
    data: GiphyItem[];
    meta: GiphyMeta;
    pagination: GiphyPagination;
}


export interface GiphyItem {
    type: string;
    id: string;
    title: string;
    url: string;
    images: {
        original: GiphyImage;
    };
}

export interface GiphyImage {
    height: string;
    width: string;
    size: string;
    url: string;
}