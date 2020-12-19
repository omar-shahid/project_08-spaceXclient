import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { AllShipsQuery } from "../generated/graphql";
import { chunkArray } from "../utils/chunkArray";

interface Props {
  ships: AllShipsQuery;
  searchStr: string;
}

const ShipsList: React.FC<Props> = (props) => {
  const [numChunks, setNumChunks] = useState(3);
  const [products, setProducts] = useState(
    chunkArray(props.ships.ships!, numChunks)
  );

  useEffect(() => {
    const makeCols = () => {
      console.log(window.innerWidth);
      if (window.innerWidth <= 640) setNumChunks(1);
      else if (window.innerWidth <= 768) {
        setNumChunks(2);
      } else setNumChunks(3);
    };
    window.addEventListener("resize", makeCols);
    makeCols();
  }, []);

  useEffect(() => {
    const filteredProducts = props.ships.ships?.filter((el) => {
      return el?.name?.toLowerCase().includes(props.searchStr.toLowerCase());
    });
    setProducts(chunkArray(filteredProducts!, numChunks));
  }, [props.searchStr, props.ships.ships, numChunks]);
  return (
    <>
      {products.map((shipsRow) => (
        <div className="lg:w-10/12 md:w-11/12 sm:w-full flex justify-center h-auto mb-4 md:mx-auto m-0 w-full">
          {shipsRow!.map((el) => (
            <div className="lg:w-4/12 md:w-6/12 sm:w-full sm:m-0 shadow-2xl m-3 p-4 min-h-full overflow-auto">
              {el?.image ? (
                <img src={el!.image!} alt={el?.name!} />
              ) : (
                <div className="h-44 flex items-center bg-gray-300 justify-center">
                  <h1 className="text-center text-gray-500 text-3xl">
                    Image not found..
                  </h1>
                </div>
              )}
              <h1 className="text-2xl text-gray-900 mt-3">{el?.name}</h1>
              <span className="text-gray-600 my-5 block">
                <strong>Active: </strong>{" "}
                {el?.active ? (
                  <span className="text-green-600">Yes</span>
                ) : (
                  <span className="text-red-500">No</span>
                )}
                <br />
                <br />
                <strong>Type: </strong>
                {el?.type}
                <br />
                <br />
                <strong>MMSI: </strong>
                {el?.mmsi ? el.mmsi : "No MMSI"}
              </span>
              <div className="flex justify-end mt-auto h-auto">
                <Link to={`/${el?.id}`}>
                  <button className="bg-blue-600 text-white p-2 rounded hover:shadow-2xl">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ShipsList;
