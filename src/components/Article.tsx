import img6 from "../assets/img/6.webp";
import img7 from "../assets/img/7.webp";
import { SliderArticle } from "./SliderSwiper";
interface Iimages {
  src: string;
  title: string;
  content: string;
}
const images: Iimages[] = [
  {
    src: img7,
    title: " آهن زنگ نزن چیست و چه کاربردی دارد؟",
    content:
      "یکی از پرکاربردترین فولادهایی که در صنایع مختلف کاربرد بسیاری دارد؛ آهن زنگ نزن است. همان گونه که از نام این محصول مشخص...",
  },
  {
    src: img6,
    title: " آهن زنگ نزن چیست و چه کاربردی دارد؟",
    content:
      "یکی از پرکاربردترین فولادهایی که در صنایع مختلف کاربرد بسیاری دارد؛ آهن زنگ نزن است. همان گونه که از نام این محصول مشخص...",
  },
];
const Article: React.FC = () => {
  return (
    <div className="w-full my-12 flex lg:flex-row flex-col gap-3">
      <div className="w-full lg:w-1/2">
        <h3 className="text-blue-900 text-xl lg:text-2xl font-bold  mb-6">
          <i className="fa fa-users mx-3"></i>
          متخصصین مهدفولاد
        </h3>
        <div className="flex space-x-4">
          <SliderArticle />
        </div>
      </div>
      <div className="w-full lg:w-1/2">
        <div className="flex justify-between">
          <h3 className="text-blue-900 text-xl lg:text-2xl font-bold  mb-6">
            <i className="fa fa-book mx-3"></i>
            مقالات
          </h3>
          <a href="#" className="text-blue-900 text-base lg:text-xl mb-6">
            مشاهده همه
            <i className="fa fa-chevron-left mx-3 text-base!"></i>
          </a>
        </div>
        <div className="grid grid-cols-1 gap-y-5">
          {images.map((item, index) => (
            <div
              key={index}
              className="flex flex-row lg:py-0 shadow hover:shadow-2xl transition-shadow duration-300 border border-gray-200 rounded shadow-gray-700"
            >
              <div className="w-full sm:w-2/3 px-4 py-2">
                <h2 className="md:text-justify text-base sm:text-lg xl:text-xl text-bold mb-5 font-bold">
                  {item.title}
                </h2>
                <p className="md:text-justify text-gray-500 leading-4 xl:leading-7 font-bold my-4">
                  {item.content}
                </p>
                <a
                  href="#"
                  className="text-base text-blue-900 cursor-pointer block text-left"
                >
                  ادامه مطالب
                  <i className="fa fa-chevron-left text-base! mr-3"></i>
                </a>
              </div>
              <img
                src={item.src}
                alt="article img"
                className="mr-3 w-32 h-32 sm:h-auto sm:w-1/3 p-4 rounded-3xl!"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Article;
