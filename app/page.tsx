import { GenreButton } from "@/components/GenreButton";

export default async function Page() {
  return (
    <div className="flex h-screen w-full">
      {/* FILTERS */}
      <div className="flex justify-between w-full">
        {/* SEARCH/MIN/MAX */}
        <div className="flex flex-col">
          <h5>Search</h5>
          {/* SEARCH TITLE OF MOVIE HERE */}
          {/* MIN/MAX */}
          <div className="flex justify-between">
            <div>
              <p>
                Min Year
              </p>
              1990 - search field
            </div>
            <div>
              <p>
                Max Year
              </p>
              2024 - search field
            </div>
          </div>
        </div>
        {/* GENRES */}
        <div className="flex flex-col">
          <h5>Genres</h5>
          <div className="flex flex-col">
            <div>
              <GenreButton genre="Romance"/>
              <GenreButton genre="Horror"/>
              <GenreButton genre="Drama"/>
              <GenreButton genre="Action"/>
              <GenreButton genre="Mystery"/>
            </div>
            <div>
              <GenreButton genre="Fantasy"/>
              <GenreButton genre="Thriller"/>
              <GenreButton genre="Western"/>
              <GenreButton genre="Sci-Fi" />
              <GenreButton genre="Adventure"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
