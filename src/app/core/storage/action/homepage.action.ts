export class GetAllGifs {
  static readonly type = '[Get All Pages]';
  constructor(public letter?: string) { }
}

export class GetSearchGif {
  static readonly type = '[Get Search gif]';
  constructor(public letter: string) { }
}
