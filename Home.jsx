import MovieCard from "../components/MovieCard";

function Home({ toggleFavorite, favorites, searchQuery }) {
  const movies = [
    { id: 1, title: "Flash", release_date: "2020" },
    { id: 2, title: "Terminator", release_date: "2009" },
    { id: 3, title: "Inception", release_date: "2010" },
    { id: 4, title: "Interstellar", release_date: "2014" },
    { id: 5, title: "The Batman", release_date: "2022" },
    { id: 6, title: "The Brave Mission", release_date: "1994" },
    { id: 7, title: "The Brave Truth", release_date: "1990" },
    { id: 8, title: "The Hidden Knight", release_date: "1994" },
    { id: 9, title: "The Brave Knight", release_date: "1996" },
    { id: 10, title: "The Silver Knight", release_date: "1990" },
    { id: 11, title: "The Brave World", release_date: "2010" },
    { id: 12, title: "The Final Warrior", release_date: "2008" },
    { id: 13, title: "The Golden Mission", release_date: "2002" },
    { id: 14, title: "The Red Empire", release_date: "2008" },
    { id: 15, title: "The Blue Knight", release_date: "1997" },
    { id: 16, title: "The Final Empire", release_date: "2018" },
    { id: 17, title: "The Silent Code", release_date: "1992" },
    { id: 18, title: "The Lost Knight", release_date: "2002" },
    { id: 19, title: "The Great Code", release_date: "2005" },
    { id: 20, title: "The Silver Knight", release_date: "1987" },
    { id: 21, title: "The Final Dream", release_date: "2017" },
    { id: 22, title: "The Brave Mission", release_date: "2004" },
    { id: 23, title: "The Golden Warrior", release_date: "2001" },
    { id: 24, title: "The Red Truth", release_date: "1993" },
    { id: 25, title: "The Hidden Mission", release_date: "2023" },
    { id: 26, title: "The Silent Empire", release_date: "2006" },
    { id: 27, title: "The Brave Code", release_date: "1986" },
    { id: 28, title: "The Lost Empire", release_date: "1985" },
    { id: 29, title: "The Silent World", release_date: "2000" },
    { id: 30, title: "The Hidden Code", release_date: "1999" },
    { id: 31, title: "The Red Code", release_date: "1981" },
    { id: 32, title: "The Great Mission", release_date: "2011" },
    { id: 33, title: "The Brave Legacy", release_date: "2016" },
    { id: 34, title: "The Brave Journey", release_date: "2019" },
    { id: 35, title: "The Silent Dream", release_date: "2007" },
    { id: 36, title: "The Hidden Truth", release_date: "1984" },
    { id: 37, title: "The Golden World", release_date: "2020" },
    { id: 38, title: "The Red Dream", release_date: "2006" },
    { id: 39, title: "The Silver Legacy", release_date: "1996" },
    { id: 40, title: "The Brave World", release_date: "1988" },
    { id: 41, title: "The Silent Journey", release_date: "1998" },
    { id: 42, title: "The Golden Empire", release_date: "2012" },
    { id: 43, title: "The Blue Code", release_date: "2001" },
    { id: 44, title: "The Final Code", release_date: "2003" },
    { id: 45, title: "The Great Truth", release_date: "2015" },
    { id: 46, title: "The Lost Truth", release_date: "2021" },
    { id: 47, title: "The Red Mission", release_date: "1982" },
    { id: 48, title: "The Blue Warrior", release_date: "1995" },
    { id: 49, title: "The Hidden Legacy", release_date: "1991" },
    { id: 50, title: "The Brave Knight", release_date: "1993" },
    { id: 51, title: "The Dark Code", release_date: "2022" },
    { id: 52, title: "The Brave Dream", release_date: "2020" },
    { id: 53, title: "The Final Legacy", release_date: "2013" },
    { id: 54, title: "The Red Warrior", release_date: "1984" },
    { id: 55, title: "The Silent Warrior", release_date: "2009" },
    { id: 56, title: "The Great Knight", release_date: "1981" },
    { id: 57, title: "The Final Dream", release_date: "2003" },
    { id: 58, title: "The Brave Empire", release_date: "2024" },
    { id: 59, title: "The Blue Journey", release_date: "1986" },
    { id: 60, title: "The Silent Legacy", release_date: "1987" },
    { id: 61, title: "The Silver Empire", release_date: "2021" },
    { id: 62, title: "The Hidden Knight", release_date: "2015" },
    { id: 63, title: "The Golden Code", release_date: "2010" },
    { id: 64, title: "The Final Knight", release_date: "1984" },
    { id: 65, title: "The Brave Warrior", release_date: "1995" },
    { id: 66, title: "The Red Knight", release_date: "1998" },
    { id: 67, title: "The Lost Mission", release_date: "1988" },
    { id: 68, title: "The Silver Warrior", release_date: "2019" },
    { id: 69, title: "The Silent Storm", release_date: "1992" },
    { id: 70, title: "The Great Empire", release_date: "1994" },
    { id: 71, title: "The Brave Storm", release_date: "1987" },
    { id: 72, title: "The Blue Empire", release_date: "1990" },
    { id: 73, title: "The Final World", release_date: "2016" },
    { id: 74, title: "The Lost Code", release_date: "2004" },
    { id: 75, title: "The Hidden Warrior", release_date: "2023" },
    { id: 76, title: "The Brave Code", release_date: "1985" },
    { id: 77, title: "The Silver Truth", release_date: "2005" },
    { id: 78, title: "The Final Empire", release_date: "1981" },
    { id: 79, title: "The Golden Journey", release_date: "1999" },
    { id: 80, title: "The Silent Code", release_date: "2002" },
    { id: 81, title: "The Brave Dream", release_date: "2017" },
    { id: 82, title: "The Great Journey", release_date: "2006" },
    { id: 83, title: "The Hidden Empire", release_date: "2018" },
    { id: 84, title: "The Lost Dream", release_date: "2014" },
    { id: 85, title: "The Golden Knight", release_date: "1991" },
    { id: 86, title: "The Red Empire", release_date: "1996" },
    { id: 87, title: "The Great Storm", release_date: "1983" },
    { id: 88, title: "The Brave Knight", release_date: "2011" },
    { id: 89, title: "The Final Knight", release_date: "2010" },
    { id: 90, title: "The Silver World", release_date: "1993" },
    { id: 91, title: "The Lost Knight", release_date: "2020" },
    { id: 92, title: "The Golden Warrior", release_date: "1994" },
    { id: 93, title: "The Blue Dream", release_date: "2007" },
    { id: 94, title: "The Red Code", release_date: "2024" },
    { id: 95, title: "The Brave Truth", release_date: "2025" },
    { id: 96, title: "The Lost World", release_date: "1997" },
    { id: 97, title: "The Final Truth", release_date: "1980" },
    { id: 98, title: "The Silver Mission", release_date: "2025" },
    { id: 99, title: "The Silver Journey", release_date: "1989" },
    { id: 100, title: "The Final Warrior", release_date: "2025" },
  ];

  //   Search Filtering Logic
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="home-container">
      <div className="movies-grid">
        {filteredMovies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            isFavorite={favorites.some((fav) => fav.id === movie.id)}
            toggleFavorite={toggleFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;
