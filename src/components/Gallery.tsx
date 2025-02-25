import Angel from "../assets/img/Angel-300x225.webp";
import Beam from "../assets/img/Beam-300x200.webp";
import ColdRolled from "../assets/img/Cold-Rolled-300x169.webp";
import HotRolled from "../assets/img/Hot-Rolled-300x200.webp";
import Pipe from "../assets/img/Pipe-300x169.webp";
import Profile from "../assets/img/Profile-300x200.webp";
import Rebar from "../assets/img/Rebar-300x200.webp";
import UChannel from "../assets/img/U-Channel-300x200.webp";
interface Igallery {
  src: string;
  content: string;
}
const gallery: Igallery[] = [
  {
    src: Angel,
    content: "نبشی",
  },
  {
    src: Beam,
    content: "تیرآهن",
  },
  {
    src: ColdRolled,
    content: "ورق سرد",
  },
  {
    src: HotRolled,
    content: "ورق گرم",
  },
  {
    src: Pipe,
    content: "لوله",
  },
  {
    src: Profile,
    content: "پروفیل",
  },
  {
    src: Rebar,
    content: "میلگرد",
  },
  {
    src: UChannel,
    content: "ناودانی",
  },
];
const Gallery = () => {
  return (
    <div className="w-full">
      <h2 className="text-center text-blue-900 font-bold my-6 text-xl lg:text-3xl">
        آهن آلات مهدفولاد
      </h2>
      <div className="grid grid-cols-2 md:grid-cols-4 grid-rows-2 gap-8">
        {gallery.map((item, index) => (
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
        ))}
      </div>
    </div>
  );
};

export default Gallery;
