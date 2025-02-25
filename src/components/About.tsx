import about1 from "../assets/img/about1.webp";
import about2 from "../assets/img/about2.webp";
const About = () => {
  return (
    <div className=" border border-gray-500 p-4 rounded-lg my-10">
      <div className="flex flex-col items-center lg:flex-row lg:my-6 lg:gap-14">
        <div className="w-fit">
          <h3 className="text-blue-900 lg:text-2xl text-xl font-bold mb-5">
            فروشگاه اینترنتی مهدفولاد
          </h3>
          <p className="text-blue-900 ">
            این مجموعه از سال ۱۳۸۳ در زمینه بازرگانی فولاد کار خود را آغاز کرد و
            در جهت گسترش فعالیت و شفاف‌سازی معاملات در سال ۱۳۹۶ اقدام به تاسیس
            شرکت مهد فولاد کیان با نام تجاری مهدفولاد کرد. رضایت‌مندی، پشتیبانی
            مشتریان و ارائه مشاوره فنی و تخصصی اولویت کار مجموعه مهدفولاد است.
            امیدواریم با ارائه بهترین خدمات از جمله پاسخگویی در اسرع وقت، متعهد
            بودن و تسهیل در فرآیند خرید، همراهی امین و قابل‌اعتماد برای شما
            باشیم. مهدفولاد با شعار راحت بخرید، مطمئن بسازید همراه همیشگی شماست.
          </p>
        </div>
        <div className="grid grid-cols-2 ">
          <img src={about1} alt="logo" className="w-fit mt-10 cursor-pointer" />
          <img src={about2} alt="logo" className="w-fit mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default About;
