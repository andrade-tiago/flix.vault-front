import { useQuery, useQueryClient } from "react-query";
import getIMDbMovieList, { IMDbMovieListEndpoint } from "@/services/imdb-api/get-imdb-movie-list";
import getIMDbMovieDetails from "@/services/imdb-api/get-imdb-movie-details";
import MovieOverview from "@/models/movie-overview";

export default function useMovieOverviewList(
  listName: IMDbMovieListEndpoint,
  pageNumber: number = 1,
) {
  const queryClient = useQueryClient();

  const queryFn = async () => {
    const imdbMovieList = await getIMDbMovieList(listName, pageNumber)

    const movieOverviewList = imdbMovieList.results.map(
      async movie => {
        const imdbMovieDetails = await queryClient.fetchQuery({
          queryKey: ['imdb', 'movie', movie.id, 'details'],
          queryFn: () => getIMDbMovieDetails(movie.id),
        })

        return MovieOverview.fromIMDbMovieDetails(imdbMovieDetails)
      }
    )

    return Promise.all(movieOverviewList)
  }

  return useQuery({
    queryKey: ['movies', listName, pageNumber],
    queryFn,
  })
}
