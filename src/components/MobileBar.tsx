import { useEffect, useState } from "react";

const MobileBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const closeMenu = () => {
    setIsOpen(false);
  };
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isOpen]);
  return (
    <>
      <div className="mx-auto fixed lg:hidden justify-around items-center bottom-0 right-0 left-0 flex z-30 px-5 py-6 bg-white shadow-2xl">
        <a href="#" className="flex items-center flex-col space-y-1">
          <svg
            width="58"
            height="24"
            viewBox="0 0 58 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clipPath="url(#clip0_3775_42301)">
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M37.0638 7.99527L32.9975 12.0615L40.9372 20.0012L36.9396 24L28.9999 16.0603L21.0603 24L17.0626 20.0012L37.0638 0L57.0662 20.0012L53.0685 24L37.0638 7.99527Z"
                fill="#004E89"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M20.9349 7.99527L4.93135 24L0.933716 20.0012L20.9349 0L27.1591 6.22301L23.1615 10.2206L20.9349 7.99527Z"
                fill="#004E89"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M42.1322 13.0648C47.452 14.5212 52.4906 16.8578 57.039 19.9776L57.0651 20.0036L53.0674 24.0012L42.1322 13.0648Z"
                fill="url(#paint0_linear_3775_42301)"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M25.6435 11.4203C26.7532 11.3458 27.8713 11.302 28.9999 11.302C30.5379 11.302 32.0487 11.3742 33.5453 11.5102L32.9975 12.0592L40.9372 19.9988L36.9396 23.9965L28.9999 16.0604L21.0603 24L17.0626 20.0024L25.6435 11.4203Z"
                fill="url(#paint1_linear_3775_42301)"
              ></path>
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M15.8678 13.0648L4.93135 24.0012L0.933716 20.0036L0.959744 19.9776C5.50856 16.8576 10.5475 14.5211 15.8678 13.0648Z"
                fill="url(#paint2_linear_3775_42301)"
              ></path>
            </g>
            <defs>
              <linearGradient
                id="paint0_linear_3775_42301"
                x1="49.5986"
                y1="23.1825"
                x2="49.5998"
                y2="-4.32767"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#004E89"></stop>
                <stop offset="1" stopColor="white"></stop>
              </linearGradient>
              <linearGradient
                id="paint1_linear_3775_42301"
                x1="28.9999"
                y1="23.0512"
                x2="28.9999"
                y2="-8.88374"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#004E89"></stop>
                <stop offset="1" stopColor="white"></stop>
              </linearGradient>
              <linearGradient
                id="paint2_linear_3775_42301"
                x1="8.40133"
                y1="23.1825"
                x2="8.40133"
                y2="-4.32885"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#004E89"></stop>
                <stop offset="1" stopColor="white"></stop>
              </linearGradient>
              <clipPath id="clip0_3775_42301">
                <rect
                  width="56.1325"
                  height="24"
                  fill="white"
                  transform="translate(0.933716)"
                ></rect>
              </clipPath>
            </defs>
          </svg>

          <span className="text-blue-900 font-bold">خانه</span>
        </a>

        <a
          href="#"
          className="flex items-center flex-col space-y-1"
          onClick={toggleMenu}
        >
          <svg
            width="20"
            height="15"
            viewBox="0 0 20 15"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 1C0 0.734784 0.105357 0.48043 0.292893 0.292893C0.48043 0.105357 0.734784 0 1 0H19C19.2652 0 19.5196 0.105357 19.7071 0.292893C19.8946 0.48043 20 0.734784 20 1C20 1.26522 19.8946 1.51957 19.7071 1.70711C19.5196 1.89464 19.2652 2 19 2H1C0.734784 2 0.48043 1.89464 0.292893 1.70711C0.105357 1.51957 0 1.26522 0 1ZM0 7.032C0 6.76678 0.105357 6.51243 0.292893 6.32489C0.48043 6.13736 0.734784 6.032 1 6.032H19C19.2652 6.032 19.5196 6.13736 19.7071 6.32489C19.8946 6.51243 20 6.76678 20 7.032C20 7.29722 19.8946 7.55157 19.7071 7.73911C19.5196 7.92664 19.2652 8.032 19 8.032H1C0.734784 8.032 0.48043 7.92664 0.292893 7.73911C0.105357 7.55157 0 7.29722 0 7.032ZM1 12.064C0.734784 12.064 0.48043 12.1694 0.292893 12.3569C0.105357 12.5444 0 12.7988 0 13.064C0 13.3292 0.105357 13.5836 0.292893 13.7711C0.48043 13.9586 0.734784 14.064 1 14.064H19C19.2652 14.064 19.5196 13.9586 19.7071 13.7711C19.8946 13.5836 20 13.3292 20 13.064C20 12.7988 19.8946 12.5444 19.7071 12.3569C19.5196 12.1694 19.2652 12.064 19 12.064H1Z"
              fill="#004E89"
            ></path>
          </svg>
          <span className="text-blue-900 font-bold">منو</span>
        </a>

        <a href="#" className="flex items-center flex-col space-y-1">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6.325 13.275C6.14167 13.0583 6.05 12.8123 6.05 12.537C6.05 12.2623 6.14167 12.0333 6.325 11.85L8.175 10H1C0.716667 10 0.479333 9.904 0.288 9.712C0.0960001 9.52067 0 9.28333 0 9C0 8.71667 0.0960001 8.479 0.288 8.287C0.479333 8.09567 0.716667 8 1 8H8.175L6.325 6.15C6.125 5.95 6.025 5.71267 6.025 5.438C6.025 5.16267 6.125 4.925 6.325 4.725C6.50833 4.525 6.73767 4.425 7.013 4.425C7.28767 4.425 7.51667 4.51667 7.7 4.7L11.3 8.3C11.4 8.4 11.471 8.50833 11.513 8.625C11.5543 8.74167 11.575 8.86667 11.575 9C11.575 9.13333 11.5543 9.25833 11.513 9.375C11.471 9.49167 11.4 9.6 11.3 9.7L7.7 13.3C7.5 13.5 7.26667 13.5917 7 13.575C6.73333 13.5583 6.50833 13.4583 6.325 13.275ZM10 18C9.71667 18 9.47933 17.904 9.288 17.712C9.096 17.5207 9 17.2833 9 17C9 16.7167 9.096 16.4793 9.288 16.288C9.47933 16.096 9.71667 16 10 16H16V2H10C9.71667 2 9.47933 1.904 9.288 1.712C9.096 1.52067 9 1.28333 9 1C9 0.716667 9.096 0.479 9.288 0.287C9.47933 0.0956666 9.71667 0 10 0H16C16.55 0 17.021 0.195667 17.413 0.587C17.8043 0.979 18 1.45 18 2V16C18 16.55 17.8043 17.021 17.413 17.413C17.021 17.8043 16.55 18 16 18H10Z"
              fill="#004E89"
            ></path>
          </svg>

          <span className="text-blue-900 font-bold">ورود / ثبت نام</span>
        </a>

        <a href="#" className="flex items-center flex-col space-y-1">
          <svg
            width="15"
            height="20"
            viewBox="0 0 15 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M2.77201 0.438993L3.84801 0.0949929C4.85701 -0.227007 5.93501 0.293993 6.36701 1.31199L7.22701 3.33999C7.60101 4.22299 7.39301 5.26199 6.71301 5.90799L4.81801 7.70599C4.93501 8.78199 5.29701 9.84099 5.90301 10.883C6.47848 11.8911 7.25038 12.7735 8.17301 13.478L10.449 12.718C11.311 12.431 12.251 12.762 12.779 13.539L14.012 15.349C14.627 16.253 14.516 17.499 13.753 18.265L12.936 19.086C12.122 19.903 10.959 20.2 9.88401 19.864C7.34401 19.072 5.01101 16.721 2.88101 12.811C0.748009 8.89499 -0.00499088 5.57099 0.623009 2.84299C0.887009 1.69499 1.70401 0.779993 2.77201 0.438993Z"
              fill="#004E89"
            ></path>
          </svg>

          <span className="text-blue-900 font-bold">تماس</span>
        </a>
      </div>
      <div
        className={`fixed top-0 right-0 bottom-0 z-50 py-3 px-2  h-full overflow-y-auto bg-white shadow-2xl transition-transform duration-500 ${
          isOpen ? "transform translate-x-0" : "transform translate-x-full"
        }`}
      >
        <div
          className={`border rounded w-full flex ${
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
            className="outline-0 border-0 w-full p-1.5"
          />
          <button className="outline-0 border-0 cursor-pointer w-fit p-1.5 text-gray-500">
            <i className="fa fa-search"></i>
          </button>
        </div>
        <ul className=" bg-white text-blue-700 py-4 border-b border-t border-gray-600 my-3">
          <li className="flex py-3 px-5 text-blue-900 font-bold transition-all duration-300 relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2545_77667)">
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
          <li className="flex py-3 px-5 text-blue-900 font-bold transition-all duration-300 relative">
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
          <li className="flex py-3 px-5 text-blue-900 font-bold transition-all duration-300 relative">
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
          <li className="flex py-3 px-5 text-blue-900 font-bold transition-all duration-300 relative">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2545_77668)">
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
                  strokeMiterlimit="10"
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
          <li className="flex py-3 px-5 text-blue-900 font-bold transition-all duration-300 relative">
            <svg
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_2545_77664)">
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
        <div className="flex flex-col py-4 space-y-5">
          <a href="#" className="text-blue-900 font-bold px-5">
            <i className="fa fa-percent mx-2"></i>
            راهنمای خرید به صرفه
          </a>
          <a href="#" className="text-blue-900 font-bold px-5">
            <i className="fa fa-industry mx-2"></i>
            تولیدکنندگان
          </a>
          <a href="#" className="text-blue-900 font-bold px-5">
            <i className="fa fa-calculator mx-2"></i>
            جدول وزن واشتال
          </a>
          <a href="#" className="text-blue-900 font-bold px-5">
            <i className="fa fa-book mx-2"></i>
            ویکی فولاد
          </a>
        </div>
      </div>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-40"
          onClick={closeMenu}
        ></div>
      )}
    </>
  );
};

export default MobileBar;
