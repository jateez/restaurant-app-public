import { Link } from "react-router-dom";

export default function CuisineCard({ name, description, id, category, imgUrl }) {
  return (
    <>
      <div className="card my-4">
        <div className="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96">
          <div className="relative h-56 mx-4 -mt-6 overflow-hidden text-white shadow-lg bg-clip-border rounded-xl bg-blue-gray-500 shadow-blue-gray-500/40">
            <img src={imgUrl} alt="card-image" />
          </div>
          <div className="p-6">
            <div className="flex justify-between items-center mb-3">
              <h5 className="font-sans text-xl font-semibold leading-snug text-blue-gray-900">{name}</h5>
              <span className="bg-indigo-500 text-white text-xs font-medium px-3 py-1 rounded-full">{category}</span>
            </div>
            <p className="font-sans text-base font-light leading-relaxed text-gray-700">{description}</p>
          </div>
          <div className="p-6 pt-0">
            <Link
              to={`/${id}`}
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
