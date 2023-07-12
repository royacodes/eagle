import { CustomFilter, GameCard, Hero, SearchBar } from "@/components";
import { fetchGames } from "@/utils";
import Image from "next/image";
export default async function Home() {
  const allGames = await fetchGames();

  const isDataEmpty =
    !Array.isArray(allGames) || allGames.length < 1 || !allGames;

  console.log(allGames);
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Game Catalogue</h1>
          <p>Explore the games you might like</p>
        </div>
        <div className="home__filters">
          <SearchBar />
        </div>

        {!isDataEmpty ? (
          <section>
            <div className="home__games-wrapper">
              {allGames?.map((game) => (
                <GameCard game={game} />
              ))}
            </div>
          </section>
        ) : (
          <div className="home__error-container">
            <h2 className="text-black text-xl font-bold">Oops, no results</h2>
            <p>{allGames?.message}</p>
          </div>
        )}
      </div>
    </main>
  );
}
