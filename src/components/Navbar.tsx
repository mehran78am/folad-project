import { useState } from "react";
import { logoImage } from "./data/data";
import { useUserContext } from "./UserContext";
const Navbar = () => {
  const [isFocused, setIsFocused] = useState(false);
  const [isHoverMenu, setIsHoverMenu] = useState(false);
  const { users } = useUserContext();
  return (
    <div className="w-full mb-3">
      <div className="w-full flex items-center justify-between">
        <div className="w-1/2 flex gap-8">
          <a href="#">
            <img
              src={users.site_details?.logo}
              alt={users.site_details?.title}
            />
          </a>
          <div
            className={`border rounded w-2/3 hidden lg:flex ${
              isFocused ? "border-gray-800 shadow-2xl" : "border-gray-400"
            }`}
          >
            <input
              type="text"
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder={
                isFocused ? "دنبال چه چیزی می‌گردید؟" : "جستجو در محصولات"
              }
              className="outline-0 border-0 px-3 py-2 w-full"
            />
            <button className="outline-0 border-0 cursor-pointer w-fit px-3 py-2 text-gray-500">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="w-1/2 flex justify-end gap-2 lg:gap-8">
          <a
            href="tel:02112345678"
            className="rounded-lg border px-3 py-2 hidden lg:flex justify-center items-center "
          >
            {users.site_details?.phone} <i className="fa fa-phone mx-2"></i>
          </a>
          <a
            href="#"
            className="rounded-lg border px-3 py-2 bg-blue-900 hover:bg-blue-950 text-white hidden lg:flex justify-center items-center"
          >
            ورود/ثبت نام
            <i className="fa fa-sign-in mx-2"></i>
          </a>

          <a
            href="#"
            className="rounded-lg p-2 lg:px-3 flex justify-center items-center border  bg-blue-900 hover:bg-blue-950 text-white"
          >
            <span>0</span>
            <i className="fa fa-shopping-bag mx-2"></i>
          </a>
          <a
            href="#"
            className="text-red-500 font-bold flex lg:hidden justify-center items-center"
          >
            <i className="fa fa-envelope mx-2"></i>
            استعلام
          </a>
        </div>
      </div>
      <div className="my-5 gap-8 relative hidden lg:flex">
        <a
          href="#"
          className="text-blue-900 font-bold relative"
          onMouseEnter={() => setIsHoverMenu(true)}
          onMouseLeave={() => setIsHoverMenu(false)}
        >
          <i className="fa fa-bars mx-2"></i>
          دسته بندی محصولات
          <div className="sub shadow-2xl absolute right-2 top-5 z-20">
            {isHoverMenu && (
              <ul className=" bg-white text-blue-700 rounded-xl py-4">
                <li className="flex py-3 px-5 hover:bg-gray-100 hover:text-red-400 transition-all duration-300 relative">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2545_77667)">
                      <path
                        d="M22.885 19.7953L2.90501 0.290529C2.90501 0.290529 -0.230195 -0.525471 0.217005 2.88573L19.6618 23.0305C19.6618 23.0305 19.1906 20.2353 22.885 19.7953ZM0.621005 1.45133C0.640205 1.23533 1.2698 1.12013 2.021 1.20013C2.7722 1.28013 3.3602 1.51533 3.341 1.73213C3.3218 1.94893 2.6914 2.06013 1.9402 1.98333C1.189 1.90653 0.598605 1.66733 0.621005 1.45133ZM1.745 2.72493C1.7666 2.50893 2.39381 2.39693 3.14501 2.47373C3.89621 2.55053 4.4874 2.78893 4.4642 3.00493C4.441 3.22093 3.8154 3.33373 3.0642 3.25613C2.313 3.17853 1.7226 2.94093 1.745 2.72493ZM3.0186 4.03613C3.0402 3.82013 3.6674 3.70733 4.4186 3.78493C5.1698 3.86253 5.76021 4.10013 5.73781 4.32013C5.71541 4.54013 5.08901 4.64893 4.33781 4.57133C3.58661 4.49373 2.9962 4.25213 3.0186 4.03613ZM4.29221 5.34733C4.31461 5.13133 4.94101 5.01853 5.69221 5.09613C6.44341 5.17373 7.03381 5.41133 7.01221 5.62733C6.99061 5.84333 6.3626 5.95613 5.6114 5.87853C4.8602 5.80093 4.26981 5.56333 4.29221 5.34733ZM5.5658 6.65853C5.5882 6.44253 6.2146 6.32973 6.9658 6.40733C7.717 6.48493 8.3074 6.72253 8.2858 6.93853C8.2642 7.15453 7.6362 7.26733 6.885 7.18973C6.1338 7.11213 5.5426 6.87453 5.5658 6.65853ZM6.83861 7.96973C6.86101 7.75293 7.4882 7.64093 8.2394 7.71853C8.9906 7.79613 9.5818 8.03373 9.5594 8.24973C9.537 8.46573 8.90981 8.57853 8.15861 8.50093C7.40741 8.42333 6.81621 8.18573 6.83861 7.96973ZM8.11221 9.28013C8.13461 9.06413 8.76181 8.95213 9.51301 9.02893C10.2642 9.10573 10.8554 9.34413 10.833 9.56093C10.8106 9.77773 10.1834 9.88893 9.4322 9.81213C8.681 9.73533 8.09061 9.49613 8.11221 9.28013ZM9.3858 10.5913C9.4082 10.3753 10.0354 10.2625 10.7866 10.3401C11.5378 10.4177 12.129 10.6553 12.1066 10.8713C12.0842 11.0873 11.457 11.2001 10.7058 11.1201C9.95461 11.0401 9.3642 10.8073 9.3858 10.5913V10.5913ZM10.6602 11.9025C10.6818 11.6865 11.309 11.5737 12.0602 11.6513C12.8114 11.7289 13.4018 11.9665 13.3794 12.1825C13.357 12.3985 12.7306 12.5113 11.9794 12.4337C11.2282 12.3561 10.6402 12.1185 10.6602 11.9025V11.9025ZM11.9338 13.2137C11.9554 12.9977 12.5826 12.8849 13.3338 12.9625C14.085 13.0401 14.6754 13.2777 14.6538 13.4937C14.6322 13.7097 14.0042 13.8225 13.253 13.7449C12.5018 13.6673 11.9114 13.4297 11.9338 13.2137V13.2137ZM13.2074 14.5249C13.2298 14.3089 13.8562 14.1961 14.6074 14.2737C15.3586 14.3513 15.949 14.5889 15.9274 14.8049C15.9058 15.0209 15.2778 15.1337 14.5266 15.0561C13.7754 14.9785 13.185 14.7409 13.2074 14.5249V14.5249ZM14.4802 15.8353C14.5026 15.6193 15.1298 15.5073 15.881 15.5841C16.6322 15.6609 17.2234 15.9001 17.201 16.1161C17.1786 16.3321 16.5514 16.4441 15.8002 16.3673C15.049 16.2905 14.4578 16.0521 14.4802 15.8353ZM15.7538 17.1465C15.7762 16.9305 16.4034 16.8177 17.1546 16.8953C17.9058 16.9729 18.497 17.2105 18.4746 17.4265C18.4522 17.6425 17.825 17.7553 17.0738 17.6777C16.3226 17.6001 15.7322 17.3601 15.7538 17.1465V17.1465ZM17.0274 18.4577C17.0498 18.2417 17.677 18.1289 18.4282 18.2065C19.1794 18.2841 19.7706 18.5225 19.7482 18.7385C19.7258 18.9545 19.0986 19.0665 18.3474 18.9889C17.5962 18.9113 17.0058 18.6737 17.0274 18.4577V18.4577ZM19.621 20.2977C18.8698 20.2177 18.2794 19.9825 18.3018 19.7665C18.3242 19.5505 18.9506 19.4377 19.7018 19.5153C20.453 19.5929 21.0434 19.8305 21.021 20.0473C20.9986 20.2641 20.3722 20.3777 19.621 20.3001V20.2977Z"
                        fill="#004E89"
                      ></path>
                      <path
                        d="M22.8191 23.11C23.7313 22.3551 24.0899 21.2828 23.6201 20.7151C23.1502 20.1473 22.0298 20.299 21.1176 21.054C20.2053 21.8089 19.8467 22.8812 20.3166 23.4489C20.7864 24.0167 21.9068 23.865 22.8191 23.11Z"
                        fill="#004E89"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_2545_77667">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="px-2">میلگرد</span>
                </li>
                <li className="flex py-3 px-5 hover:bg-gray-100 hover:text-red-400 transition-all duration-300 relative">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.240723 11.0548L2.57432 11.042L10.3247 20.494L21.0303 18.7028L23.7063 21.4324L10.5543 23.9404L0.240723 11.0548Z"
                      fill="#004E89"
                    ></path>
                    <path
                      d="M2.64618 6.66699L10.4502 15.8718L21.0262 14.391L23.7062 17.2366L10.591 19.3542L0.0341797 6.66699H2.64618Z"
                      fill="#004E89"
                    ></path>
                    <path
                      d="M10.4966 14.7847L23.9654 12.8999L11.6254 1.5127L0.339844 2.5007L10.4966 14.7847Z"
                      fill="#004E89"
                    ></path>
                  </svg>
                  <span className="px-2">ورق گرم</span>
                </li>
                <li className="flex py-3 px-5 hover:bg-gray-100 hover:text-red-400 transition-all duration-300 relative">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.41455 23.1872L10.653 22.3984L11.313 20.7072L12.6794 20.4808L13.8906 21.8344L17.6282 21.2544L18.2578 19.4184L19.8506 19.192L21.0465 20.4808L23.9441 20.1096L13.4218 3.17763H11.9706L11.457 2.26562H8.73455L17.7578 18.476L17.1562 20.3376L7.98255 3.87123H6.81535L6.10095 2.66483L2.94895 2.75042L10.857 20.192L10.3106 21.512L2.43295 4.64083L0.0561523 4.69843L6.41455 23.1872Z"
                      fill="#004E89"
                    ></path>
                  </svg>
                  <span className="px-2">ورق سرد</span>
                </li>
                <li className=" flex py-3 px-5 hover:bg-gray-100 hover:text-red-400 transition-all duration-300 relative">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2545_77668)">
                      <path
                        d="M0.600098 1.33789L16.7461 17.2619L16.2061 23.3639L0.600098 5.80789V1.33789Z"
                        fill="#004E89"
                      ></path>
                      <path
                        d="M17.2021 16.6498L23.1421 15.6358L5.67607 0.341797L1.12207 0.347797L17.2021 16.6498Z"
                        fill="#004E89"
                      ></path>
                      <path
                        d="M17.4721 17.6344L22.8241 16.6504L22.3501 21.5464L16.9321 22.8904L17.4721 17.6344Z"
                        stroke="#004E89"
                        stroke-miterlimit="10"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_2545_77668">
                        <rect width="24" height="24" fill="white"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="px-2">پروفیل</span>
                </li>
                <li className="py-3 flex px-5 hover:bg-gray-100 hover:text-red-400 transition-all duration-300 relative">
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clip-path="url(#clip0_2545_77664)">
                      <path
                        d="M2.44336 1.40388L8.21696 0.879883L23.1922 13.9487L15.8618 14.9871L2.44336 1.40388Z"
                        fill="#004E89"
                      ></path>
                      <path
                        d="M4.32013 5.35742L16.6489 18.0134H18.3289V21.6134C18.3289 21.6134 15.0929 21.567 14.3289 23.5286L0.677734 8.53262C0.677734 8.53262 3.99373 8.67342 4.32013 5.35742Z"
                        fill="#004E89"
                      ></path>
                      <path
                        d="M16.191 15.6641L23.3222 14.6465C23.3265 15.0176 23.1978 15.3781 22.9593 15.6625C22.7209 15.9469 22.3884 16.1365 22.0222 16.1969L20.6766 16.4193L20.6502 22.3393L21.7598 22.3265C22.4518 22.3177 23.0302 22.6881 23.0558 23.3793L15.4582 24.5905V24.5033C15.4478 23.6769 15.9854 23.2097 16.7814 22.9833L19.0494 22.4937L19.1526 16.6057L17.4614 16.7841C17.3026 16.8021 17.1419 16.7866 16.9895 16.7388C16.8371 16.6909 16.6964 16.6117 16.5764 16.5062C16.4565 16.4008 16.3599 16.2713 16.293 16.1263C16.226 15.9812 16.1902 15.8238 16.1878 15.6641H16.191Z"
                        fill="#004E89"
                      ></path>
                    </g>
                    <defs>
                      <clipPath id="clip0_2545_77664">
                        <rect
                          width="24"
                          height="24"
                          fill="white"
                          transform="translate(0 0.726562)"
                        ></rect>
                      </clipPath>
                    </defs>
                  </svg>
                  <span className="px-2">تیرآهن</span>
                </li>
              </ul>
            )}
          </div>
        </a>
        <a href="#" className="text-blue-900 font-bold">
          <i className="fa fa-percent mx-2"></i>
          راهنمای خرید به صرفه
        </a>
        <a href="#" className="text-blue-900 font-bold">
          <i className="fa fa-industry mx-2"></i>
          تولیدکنندگان
        </a>
        <a href="#" className="text-blue-900 font-bold">
          <i className="fa fa-calculator mx-2"></i>
          جدول وزن واشتال
        </a>
        <a href="#" className="text-blue-900 font-bold">
          <i className="fa fa-book mx-2"></i>
          ویکی فولاد
        </a>
        <a href="#" className="text-red-500 font-bold absolute left-0">
          <i className="fa fa-envelope mx-2"></i>
          استعلام سریع
        </a>
      </div>
    </div>
  );
};

export default Navbar;
