import { gallery } from "./data/data";
import { useUserContext } from "./UserContext";
const Gallery = () => {
  const { users } = useUserContext();
  return (
    <div className="w-full">
      <h2 className="text-center text-blue-900 font-bold my-6 text-xl lg:text-3xl">
        آهن آلات مهدفولاد
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-8">
        {users.sliders?.map((item: any, index: number) => (
          <div
            className="col-span-1 row-span-1 rounded-lg relative"
            key={index}
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full rounded-xl"
            />
            <a
              href="#"
              className="absolute inset-0 bg-blue-700  opacity-20 transition-opacity duration-300 hover:opacity-0 rounded-lg"
            ></a>
            <p className="absolute right-0 bottom-0 bg-slate-200 text-base lg:text-xl p-2 rounded-tl-2xl z-10">
              <i className="fa fa-chevron-left mx-3 text-base! text-slate-700 "></i>
              {item.title}
            </p>
          </div>
        ))}
        {/* {gallery.map((item, index) => (
          <div
            className="col-span-1 row-span-1 rounded-lg relative"
            key={index}
          >
            <img
              src={item.src}
              alt={item.content}
              className="w-full h-full rounded-xl"
            />
            <a
              href="#"
              className="absolute inset-0 bg-blue-700  opacity-20 transition-opacity duration-300 hover:opacity-0 rounded-lg"
            ></a>
            <p className="absolute right-0 bottom-0 bg-slate-200 text-base lg:text-xl p-2 rounded-tl-2xl z-10">
              <i className="fa fa-chevron-left mx-3 text-base! text-slate-700 "></i>
              {item.content}
            </p>
          </div>
        ))} */}
      </div>
    </div>
  );
};

export default Gallery;
