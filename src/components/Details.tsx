import React from "react";
import { useParams } from "react-router-dom";
import { ShipDetailsQuery, useShipDetailsQuery } from "../generated/graphql";
import Loader from "./Loader";

interface Props {}

const Details: React.FC<Props> = (props) => {
  const { id } = useParams<{ id: string }>();
  const { data, loading, error } = useShipDetailsQuery({
    variables: {
      id,
    },
  });
  if (loading) return <Loader />;
  return (
    <div className="p-4 bg-gray-200">
      <div className="mx-auto p-8 bg-white w-11/12 min-h-screen overflow-auto">
        {data?.ship?.image ? (
          <img
            src={data?.ship?.image!}
            alt={data?.ship?.name!}
            className="w-100 max-w-6xl "
          />
        ) : (
          <div className="h-44 flex items-center bg-gray-300 justify-center">
            <h1 className="text-center text-gray-500 text-3xl">
              Image not found..
            </h1>
          </div>
        )}
        <h1 className="text-7xl text-gray-900 my-6">{data?.ship?.name}</h1>
        <div className="text-gray-600 text-xl mb-4">
          <strong>Type: </strong> {data?.ship?.type ?? "Not Found.."}{" "}
        </div>
        <div className="text-gray-600 text-xl mb-4">
          <strong>Active: </strong>{" "}
          {data?.ship?.active ? (
            <span className="text-green-600">Yes</span>
          ) : (
            <span className="text-red-500">No</span>
          )}
        </div>
        <div className="text-gray-600 text-xl mb-4">
          <strong>Weight: </strong> {data?.ship?.weight_kg ?? "Not Found.."}KGs
          {", "}
          {data?.ship?.weight_lbs ?? "Not Found.."}LBs
        </div>
        <div className="text-gray-600 text-xl mb-4">
          <strong>Built in </strong> {data?.ship?.year_built ?? "Not Found.."}{" "}
        </div>
        <div className="text-gray-600 text-xl mb-4">
          <strong>Roles</strong>
          <ul className="list-inside list-disc">
            {data?.ship?.roles?.map((el) => (
              <li key={el}>{el}</li>
            ))}
          </ul>
        </div>
        <div className="text-gray-600 text-xl mb-4">
          <strong>MMSI: </strong> {data?.ship?.mmsi ?? "Not Found.."}{" "}
        </div>
        <div className="text-gray-600 text-xl mb-4">
          <strong>IMO :</strong> {data?.ship?.imo ?? "Not Found.."}{" "}
        </div>
        <div className="text-gray-600 text-xl mb-4">
          <strong>Home Port: </strong> {data?.ship?.home_port ?? "Not Found.."}{" "}
        </div>
        <div className="text-gray-600 text-xl mb-4">
          <strong>Course Degrees: </strong>{" "}
          {data?.ship?.course_deg ?? "Not Found.."}{" "}
        </div>
        <div className="text-gray-600 text-xl mb-4">
          <strong>Class:</strong> {data?.ship?.class ?? "Not Found.."}{" "}
        </div>
        <div className="text-gray-600 text-xl mb-4">
          <strong>Attempted Landings:</strong>{" "}
          {data?.ship?.attempted_landings ?? "Not Found.."}{" "}
        </div>
        <div className="text-gray-600 text-xl mb-4">
          <strong>Abs:</strong> {data?.ship?.abs ?? "Not Found.."}{" "}
        </div>
        <div className="text-gray-600 text-2xl mt-16">
          <h1 className="text-4xl font-medium">Missions </h1>
          <table className="text-left table-fixed w-full text-xl">
            <thead className="bg-blue-500 mt-4 flex text-white w-full">
              <tr className="flex w-full mb-4">
                <th className="p-4 w-3/4">Name</th>
                <th className="p-4 w-1/4">Flight</th>
              </tr>
            </thead>
            <tbody
              className="bg-grey-light border-2 border-blue-500 flex flex-col items-center justify-between overflow-y-scroll w-full"
              style={{ height: "50vh" }}
            >
              {data?.ship?.missions?.map((el) => (
                <tr className="flex w-full mb-4">
                  <td className="p-4 w-3/4">{el?.name}</td>
                  <td className="p-4 w-1/4">{el?.flight}</td>
                </tr>
              ))}
            </tbody>
          </table>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
export default Details;
