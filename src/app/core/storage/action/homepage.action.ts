export class GetAllGifs {
  static readonly type = '[Get All Gif]';
  constructor() { }
}

export class GetSearchGif {
  static readonly type = '[Get Search Gif]';
  constructor(public letter: string) { }
}
