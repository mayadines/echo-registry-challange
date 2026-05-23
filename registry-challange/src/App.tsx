import { useCallback } from "react";
import { SearchBar } from "./components/SearchBar";

function App() {
  const handleSearch = useCallback((query: string) => {
    console.log("Search:", query);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-green-100 flex flex-col items-center justify-center px-4">
      <div className="text-center mb-8 space-y-4">
        <h1 className="text-5xl font-light text-gray-900 leading-tight">
          Explore the
          <br />
          Container Registry
=        </h1>
        <p className="text-gray-500 text-base max-w-md mx-auto">
          Search and browse Docker repositories, explore tags, sizes, and pull
          commands — all in one place.
        </p>
      </div>

      <SearchBar onSearch={handleSearch} />
    </div>
  );
}

export default App;
