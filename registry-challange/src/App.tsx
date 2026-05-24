import { useState, useEffect } from "react";
import { Search } from "@/components/Search/Search";
import { RepositoryDetails } from "@/components/RepositoryDetails/RepositoryDetails";

function App() {
  const [params, setParams] = useState(
    () => new URLSearchParams(window.location.search)
  );

  useEffect(() => {
    const handler = () =>
      setParams(new URLSearchParams(window.location.search));
    window.addEventListener("popstate", handler);
    return () => window.removeEventListener("popstate", handler);
  }, []);

  const repo = params.get("repo");
  const [namespace, name] = repo?.split("/") ?? [];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-100 to-green-100">
      {namespace && name ? (
        <RepositoryDetails
          namespace={namespace}
          name={name}
          backQuery={params.get("q") ?? ""}
          backPage={params.get("page") ?? "0"}
        />
      ) : (
        <Search />
      )}
    </div>
  );
}

export default App;
