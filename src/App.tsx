import React from "react";
import Loader from "./components/Loader";
import SearchForm from "./components/SearchForm";
import ShipsList from "./components/ShipsList";
import { useAllShipsQuery } from "./generated/graphql";

function App() {
  const {loading, data, error} = useAllShipsQuery();
  return (
    <div className="p-4">
      <h1 className="text-8xl text-gray-700 text-center font-extralight">SpaceX CLient (Ships)</h1>
      <p>{loading ? <Loader /> : ""}</p>
      <SearchForm />
      {!loading && !error && <ShipsList ships={data!} />}
      {error && <h1>Oops, an error occured</h1>}
    </div>
  );
}

export default App;
