export enum MediaType {
  Movie = 'movie',
  Series = 'series',
}

export default abstract class MediaOverview {
  abstract readonly mediaType: MediaType

  constructor(
    readonly id: number,
    readonly overview: string,
    readonly posterURL: string | null,
    readonly rating: number,
    readonly title: string,
  ) {}
}
