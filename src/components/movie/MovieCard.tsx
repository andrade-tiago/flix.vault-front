import MovieData from "./MovieData"
import PlayButton from "./PlayButton"

export default function MovieCard() {
  const movieImg = "https://i.pinimg.com/736x/3c/fc/99/3cfc99925ade431e3b9c3ae71ccc1c3d.jpg"
  const movieTitle = "Rougue One: Uma história Star Wars"
  const movieDescription = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. In pellentesque commodo diam, in facilisis mi eleifend eget. Suspendisse eu ante eu metus tincidunt vulputate. Ut libero lacus, feugiat ac velit eu, porttitor elementum quam."

  return (
    <div className="w-44 hover:-translate-y-1 focus-within:-translate-y-1 transition-transform duration-200 flex flex-col gap-1 text-gray-400">
      <div className="h-64 rounded-xl overflow-hidden relative">
        {/* background-image */} <img
          src={movieImg} alt="Banner do filme"
          className="absolute w-full h-full object-cover -z-10 top-0 left-0"
        />

        <div className="w-full h-full p-3 bg-gray-950/70 backdrop-blur-sm opacity-0 hover:opacity-100 transition-opacity focus-within:opacity-100 flex flex-col justify-between items-center">
          <p className="w-full text-gray-100">{movieDescription.substring(0, 100)}...</p>

          <PlayButton />
        </div>
      </div>

      <h3 className="font-medium w-full" title={movieTitle}>{movieTitle.substring(0, 15)}...</h3>

      <MovieData year={2015} duration={78} rating={8} />
    </div>
  )
}
