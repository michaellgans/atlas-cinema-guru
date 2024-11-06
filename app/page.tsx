import { GenreButton } from "@/components/GenreButton";
import { MovieCard } from "@/components/MovieCard";

export default async function Page() {
  return (
    <div className="flex h-screen w-full flex-col">
      {/* FILTERS */}
      <div className="flex justify-between w-full py-12 px-11">
        {/* SEARCH/MIN/MAX */}
        <div className="flex flex-col">
          <h5>Search</h5>
          {/* SEARCH TITLE OF MOVIE HERE */}
          <input type="text" className="border-2 focus:ring-1 focus:outline-none focus:ring-lumi-dark-teal m-1 py-1 px-2 rounded-full border-lumi-teal bg-lumi-navy2" placeholder="Search Movies..." />
          {/* MIN/MAX */}
          <div className="flex justify-between p-1">
            <div>
              <p>
                Min Year
              </p>
              <input type="text" className="border-2 focus:ring-1 focus:outline-none focus:ring-lumi-dark-teal m-1 py-1 px-2 rounded-full border-lumi-teal bg-lumi-navy2" placeholder="1990" />
            </div>
            <div>
              <p>
                Max Year
              </p>
              <input type="text" className="border-2 focus:ring-1 focus:outline-none focus:ring-lumi-dark-teal m-1 py-1 px-2 rounded-full border-lumi-teal bg-lumi-navy2" placeholder="2024" />
            </div>
          </div>
        </div>
        {/* GENRES */}
        <div className="flex flex-col">
          <h5>Genres</h5>
          <div className="flex flex-col p-1">
            <div className="m-1">
              <GenreButton genre="Romance"/>
              <GenreButton genre="Horror"/>
              <GenreButton genre="Drama"/>
              <GenreButton genre="Action"/>
              <GenreButton genre="Mystery"/>
            </div>
            <div className="m-1">
              <GenreButton genre="Fantasy"/>
              <GenreButton genre="Thriller"/>
              <GenreButton genre="Western"/>
              <GenreButton genre="Sci-Fi" />
              <GenreButton genre="Adventure"/>
            </div>
          </div>
        </div>
      </div>
      {/* MOVIE CARDS CONTAINER */}
      <div className="flex justify-center">
        <MovieCard title="Gone with the Wind" date="2045" description="It's pretty good..." genre="Romance" />
      </div>
    </div>
  );
}
