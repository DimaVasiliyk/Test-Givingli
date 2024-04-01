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
    data: GiphyItemResponse[];
    meta: GiphyMeta;
    pagination: GiphyPagination;
}


export interface GiphyItemResponse {
    import_datetime: Date;
    title: string;
    url: string;
    images: {
        downsized: any;
    };
}

export interface GiphyItem {
    datetime: Date;
    title: string;
    url: string;
}