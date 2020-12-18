import React from "react";
import { AllShipsQuery } from "../generated/graphql";
import { chunkArray } from "../utils/chunkArray";

interface Props {
  ships: AllShipsQuery;
}

const ShipsList: React.FC<Props> = (props) => {
  return (
    <>
      {chunkArray(props.ships.ships!, 3).map((shipsRow) => (
        <div className="w-10/12 flex justify-center h-auto mb-4 mx-auto">
          {shipsRow!.map((el) => (
            <div className="w-4/12 shadow-2xl m-3 p-4 min-h-full overflow-auto">
              {el?.image ? (
                <img src={el!.image!} alt={el?.name!} />
              ) : (
                <div className="h-44 flex items-center justify-center">
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
                <button className="bg-green-600 text-white p-2 rounded hover:shadow-2xl">
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      ))}
    </>
  );
};

export default ShipsList;
