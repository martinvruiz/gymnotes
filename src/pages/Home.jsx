import { HomeInfo } from "../components/HomeInfo/HomeInfo";
import { Link } from "react-router-dom";
import gim from "../img/gim.jpg";

export const Home = () => {
  const gimImg = gim;

  return (
    <>
      <div className="flex flex-col mt-2 items-center w-full h-full">
        <div className="flex flex-col md:flex-row w-full shadow-lg">
          <div className="w-full my-2 text-center flex flex-col items-center justify-center">
            <h1 className="text-xl lg:text-4xl font-bold">Gym Notes</h1>
            <p className="w-3/4 mt-2 p-2">
              Donde podes controlar tu progreso, sin preocupaciones y de la
              manera mas sencilla
            </p>
            <Link
              to="/notes"
              className="p-3 mt-2 rounded-lg bg-orange-500 border"
            >
              Comenzar
            </Link>
          </div>
          <div className="md:w-full">
            <img
              src={gimImg}
              alt={gimImg}
              className="max-h-full w-full object-cover"
            />
          </div>
        </div>

        <HomeInfo />
      </div>
    </>
  );
};
