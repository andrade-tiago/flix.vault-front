import { IMDbTVSeriesDetails } from "@/interfaces/imdb-api/imdb-media-details";
import MediaOverview from "./media-overview";
import IMDBbImageURL, { PosterSizes } from "@/services/imdb-api/imdb-images";
import { MediaType } from "@/enums/media-type";

export default class SeriesOverview extends MediaOverview {
  readonly mediaType = MediaType.Series

  constructor(
    id: number,
    overview: string,
    posterPath: string | null,
    rating: number,
    title: string,

    readonly episodes: number,
    readonly seasons: number,
  ) {
    super(id, overview, posterPath, rating, title)
  }

  static fromIMDbSeriesDetails(series: IMDbTVSeriesDetails) {
    return new SeriesOverview(
      series.id,
      series.overview,
      series.poster_path ? IMDBbImageURL.poster(PosterSizes.W185, series.poster_path) : null,
      series.vote_average,
      series.name,
      series.number_of_episodes,
      series.number_of_seasons,
    )
  }
}
