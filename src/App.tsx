import React, {useState} from "react";
import Loader from "./components/Loader";
import SearchForm from "./components/SearchForm";
import ShipsList from "./components/ShipsList";
import { useAllShipsQuery } from "./generated/graphql";

function App() {
  const [searchStr, setSearchStr] = useState("")
  const onSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchStr(e.target.value)
  }

  const {loading, data, error} = useAllShipsQuery();
  return (
    <div className="p-4">
      <h1 className="text-8xl text-gray-700 text-center font-extralight">SpaceX CLient (Ships)</h1>
      <p>{loading ? <Loader /> : ""}</p>
      <SearchForm onSearchStr={onSearchChange}/>
      {!loading && !error && <ShipsList searchStr={searchStr} ships={data!} />}
      {error && <h1>Oops, an error occured</h1>}
    </div>
  );
}

export default App;
