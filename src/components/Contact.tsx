import logo from "../assets/img/logo.svg";
const Contact = () => {
  return (
    <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3">
      <div className="hidden md:block">
        <h2 className="text-xl text-blue-900 font-bold">دسترسی سریع</h2>
        <div className="flex flex-col space-y-1 my-5">
          <a href="#" className="text-base text-blue-700">
            قیمت میلگرد
          </a>
          <a href="#" className="text-base text-blue-700">
            قیمت تیرآهن
          </a>
          <a href="#" className="text-base text-blue-700">
            قیمت نبشی
          </a>
          <a href="#" className="text-base text-blue-700">
            قیمت ناودانی
          </a>
        </div>
      </div>
      <div className="sm:block flex items-center flex-col">
        <h2 className="text-xl text-blue-900 font-bold">مهدفولاد </h2>
        <div className="flex flex-col space-y-1 my-5">
          <a href="#" className="text-base text-blue-700">
            درباره ما
          </a>
          <a href="#" className="text-base text-blue-700">
            تماس با ما
          </a>
          <a href="#" className="text-base text-blue-700">
            قوانین و مقررات
          </a>
        </div>
      </div>
      <div className="sm:block flex items-center flex-col">
        <h2 className="text-xl text-blue-900 font-bold">لینک‌های مفید </h2>
        <div className="flex flex-col space-y-1 my-5">
          <a href="#" className="text-base text-blue-700">
            ویکی فولاد
          </a>
          <a href="#" className="text-base text-blue-700">
            تولید کنندگان
          </a>
          <a href="#" className="text-base text-blue-700">
            جدول وزن و اشتال
          </a>
          <a href="#" className="text-base text-blue-700">
            راهنمای خرید به صرفه
          </a>
        </div>
      </div>
      <div className="sm:block flex items-center flex-col">
        <h2 className="text-xl text-blue-900 font-bold">
          راحت بخرید، مطمئن بسازید
        </h2>
        <div className="flex flex-col space-y-1 my-5">
          <a href="#" className="text-base text-blue-700">
            7 روز هفته - 24 ساعته
          </a>
          <a href="#" className="flex justify-between text-base text-blue-700">
            تلفن
            <a href="tel:02112345">021-12345</a>
          </a>
          <a href="#" className="flex justify-between text-base text-blue-700">
            ایمیل
            <a href="mailto:info@gmail.com">info@gmail.com</a>
          </a>
        </div>
      </div>
      <div className="flex flex-col space-y-1 items-center">
        <a href="#" className="text-base text-blue-700">
          <img src={logo} alt="logo" className="w-28" />
        </a>
        <a
          href="#"
          className="text-base bg-blue-900 text-white rounded-lg px-3 py-1 hover:shadow-2xl my-3"
        >
          <span>دانلود کاتالوگ</span>
        </a>
        <a
          href="#"
          className="text-base text-blue-700 flex flex-row items-center justify-baseline gap-x-3"
        >
          <span>
            <a href="#" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M0 12.0007C0 16.9145 2.95481 21.1359 7.18303 22.9918C7.14928 22.1539 7.17703 21.148 7.39191 20.2362C7.62262 19.2621 8.93597 13.6974 8.93597 13.6974C8.93597 13.6974 8.55262 12.9311 8.55262 11.7987C8.55262 10.0204 9.58331 8.69224 10.8669 8.69224C11.9585 8.69224 12.4858 9.51208 12.4858 10.4938C12.4858 11.5911 11.786 13.2324 11.4261 14.7525C11.1254 16.0255 12.0643 17.0637 13.3201 17.0637C15.5937 17.0637 17.125 14.1435 17.125 10.6836C17.125 8.05352 15.3536 6.08496 12.1317 6.08496C8.49159 6.08496 6.22388 8.79958 6.22388 11.8318C6.22388 12.8773 6.53212 13.6146 7.01494 14.1855C7.23694 14.4477 7.26778 14.5532 7.18744 14.8543C7.12988 15.0751 6.99769 15.6067 6.94294 15.8173C6.86306 16.1213 6.61678 16.2299 6.34209 16.1177C4.66547 15.4332 3.88462 13.5971 3.88462 11.5331C3.88462 8.1243 6.75956 4.0368 12.4611 4.0368C17.0426 4.0368 20.0581 7.35218 20.0581 10.911C20.0581 15.6185 17.441 19.1353 13.5832 19.1353C12.2876 19.1353 11.069 18.435 10.6515 17.6395C10.6515 17.6395 9.95484 20.4044 9.80728 20.9383C9.55284 21.8636 9.05484 22.7883 8.5995 23.5091C9.70365 23.8355 10.8491 24.0013 12.0005 24.0011C18.6271 24.0011 24.0001 18.6284 24.0001 12.0007C24.0001 5.37321 18.6271 0.000488281 12.0005 0.000488281C5.37319 0.000488281 0 5.37321 0 12.0007Z"
                  fill="#CB1F27"
                ></path>
              </svg>
            </a>
          </span>

          <span>
            <a href="#" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="18"
                viewBox="0 0 24 18"
                fill="none"
              >
                <path
                  d="M9.6 12.4993V5.50176L15.84 9.00051L9.6 12.4993Z"
                  fill="white"
                ></path>
                <path
                  d="M23.4937 3.38843C23.3571 2.89554 23.0897 2.44613 22.7181 2.08519C22.3466 1.72426 21.884 1.46445 21.3766 1.33178C19.5082 0.840515 12 0.840515 12 0.840515C12 0.840515 4.49183 0.840515 2.62336 1.33178C2.11599 1.46445 1.6534 1.72426 1.28186 2.08519C0.910331 2.44613 0.642899 2.89554 0.506332 3.38843C0.157447 5.23964 -0.0118575 7.11857 0.00064491 9.00051C-0.0118575 10.8825 0.157447 12.7614 0.506332 14.6126C0.642899 15.1055 0.910331 15.5549 1.28186 15.9158C1.6534 16.2768 2.11599 16.5366 2.62336 16.6692C4.49183 17.1605 12 17.1605 12 17.1605C12 17.1605 19.5082 17.1605 21.3766 16.6692C21.884 16.5366 22.3466 16.2768 22.7181 15.9158C23.0897 15.5549 23.3571 15.1055 23.4937 14.6126C23.8426 12.7614 24.0119 10.8825 23.9994 9.00051C24.0119 7.11857 23.8426 5.23964 23.4937 3.38843ZM9.60013 12.4977V5.50337L15.8312 9.00051L9.60013 12.4977Z"
                  fill="#FC0100"
                ></path>
              </svg>
            </a>
          </span>
          <span>
            <a href="#" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M0 11.5205C0 6.08989 0 3.37462 1.68706 1.68755C3.37413 0.000488281 6.0894 0.000488281 11.52 0.000488281H12.48C17.9106 0.000488281 20.6258 0.000488281 22.3129 1.68755C24 3.37462 24 6.08989 24 11.5205V12.4805C24 17.9111 24 20.6263 22.3129 22.3134C20.6258 24.0005 17.9106 24.0005 12.48 24.0005H11.52C6.0894 24.0005 3.37413 24.0005 1.68706 22.3134C0 20.6263 0 17.9111 0 12.4805V11.5205Z"
                  fill="url(#paint0_linear_3708_71540)"
                ></path>
                <path
                  d="M8.83231 16.7913L9.05203 16.8999C9.96763 17.4429 10.993 17.6962 12.0184 17.6962C15.2411 17.6962 17.8779 15.09 17.8779 11.9046C17.8779 10.3844 17.2553 8.90026 16.1567 7.81432C15.058 6.72838 13.5931 6.11305 12.0184 6.11305C8.79572 6.11305 6.15891 8.71926 6.19555 11.9409C6.19555 13.0268 6.52515 14.0765 7.07446 14.9814L7.22093 15.1986L6.63503 17.3343L8.83231 16.7913Z"
                  fill="#31D652"
                ></path>
                <path
                  d="M16.7792 7.23515C15.5341 5.96826 13.8129 5.28049 12.055 5.28049C8.31964 5.28049 5.31665 8.28487 5.35324 11.9408C5.35324 13.0991 5.68283 14.2213 6.23219 15.2348L5.28 18.6736L8.83231 17.7686C9.82109 18.3116 10.9197 18.565 12.0184 18.565C15.7172 18.565 18.7202 15.5606 18.7202 11.9047C18.7202 10.131 18.0243 8.46587 16.7792 7.23515ZM12.055 17.4429C11.0662 17.4429 10.0774 17.1896 9.23514 16.6828L9.01543 16.5742L6.89138 17.1171L7.44069 15.0539L7.29421 14.8367C5.68283 12.2667 6.45191 8.86404 9.08867 7.27132C11.7254 5.67865 15.1313 6.43882 16.7426 9.04504C18.354 11.6513 17.5849 15.0176 14.9482 16.6104C14.1058 17.1533 13.0805 17.4429 12.055 17.4429ZM15.2777 13.425L14.8749 13.244C14.8749 13.244 14.289 12.9906 13.9228 12.8096C13.8861 12.8096 13.8495 12.7734 13.8129 12.7734C13.703 12.7734 13.6298 12.8096 13.5565 12.8459C13.5565 12.8459 13.5199 12.882 13.0072 13.4612C12.9706 13.5336 12.8973 13.5698 12.8241 13.5698H12.7874C12.7509 13.5698 12.6776 13.5336 12.641 13.4974L12.4579 13.425C12.055 13.244 11.6888 13.0268 11.3958 12.7372C11.3226 12.6649 11.2127 12.5925 11.1395 12.5201C10.8831 12.2667 10.6268 11.9771 10.4437 11.6513L10.407 11.5789C10.3705 11.5427 10.3705 11.5065 10.3338 11.4341C10.3338 11.3618 10.3338 11.2894 10.3705 11.2531C10.3705 11.2531 10.5169 11.0721 10.6268 10.9636C10.7 10.8911 10.7366 10.7826 10.8099 10.7102C10.8831 10.6016 10.9198 10.4568 10.8831 10.3482C10.8465 10.1672 10.407 9.18987 10.2972 8.9727C10.2239 8.86409 10.1507 8.82792 10.0409 8.7917H9.63803C9.56474 8.7917 9.49155 8.82792 9.41826 8.82792L9.38161 8.86409C9.30838 8.90031 9.23514 8.9727 9.1619 9.00887C9.08867 9.08131 9.05202 9.15365 8.97878 9.22609C8.72242 9.55187 8.57595 9.95003 8.57595 10.3482C8.57595 10.6378 8.64919 10.9274 8.75907 11.1808L8.79571 11.2894C9.12531 11.9771 9.56473 12.5925 10.1507 13.1354L10.2972 13.2802C10.407 13.3888 10.5169 13.4612 10.5902 13.5698C11.3592 14.2214 12.2381 14.6919 13.2269 14.9453C13.3368 14.9815 13.4833 14.9815 13.5932 15.0177H13.9594C14.1425 15.0177 14.3622 14.9453 14.5087 14.8729C14.6185 14.8005 14.6918 14.8005 14.765 14.7281L14.8383 14.6557C14.9115 14.5833 14.9848 14.5471 15.058 14.4747C15.1313 14.4024 15.2045 14.33 15.2411 14.2575C15.3144 14.1127 15.351 13.9317 15.3876 13.7508V13.4974C15.3876 13.4974 15.351 13.4612 15.2777 13.425Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_3708_71540"
                    x1="12"
                    y1="0.000488281"
                    x2="12"
                    y2="24.0005"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#42E760"></stop>
                    <stop offset="0.765625" stop-color="#29CB4A"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </span>
          <span>
            <a href="#" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  d="M12 24.0005C18.6274 24.0005 24 18.6279 24 12.0005C24 5.37307 18.6274 0.000488281 12 0.000488281C5.37258 0.000488281 0 5.37307 0 12.0005C0 18.6279 5.37258 24.0005 12 24.0005Z"
                  fill="url(#paint0_linear_3708_71538)"
                ></path>
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M5.43189 11.8738C8.93014 10.3497 11.2628 9.34489 12.43 8.85942C15.7626 7.47331 16.455 7.23252 16.9064 7.22457C17.0056 7.22282 17.2276 7.24743 17.3714 7.36409C17.4928 7.4626 17.5262 7.59567 17.5422 7.68906C17.5581 7.78246 17.578 7.99522 17.5622 8.16146C17.3816 10.0589 16.6002 14.6636 16.2027 16.7888C16.0345 17.6881 15.7032 17.9896 15.3826 18.0191C14.6857 18.0832 14.1566 17.5586 13.4816 17.1162C12.4255 16.4238 11.8288 15.9929 10.8036 15.3173C9.61884 14.5365 10.3869 14.1074 11.0621 13.4061C11.2388 13.2226 14.3092 10.4298 14.3686 10.1765C14.376 10.1448 14.3829 10.0267 14.3128 9.96433C14.2426 9.90197 14.139 9.9233 14.0643 9.94026C13.9584 9.9643 12.2712 11.0795 9.00264 13.2858C8.52373 13.6147 8.08994 13.7749 7.70129 13.7665C7.27283 13.7573 6.44864 13.5243 5.83594 13.3251C5.08444 13.0808 4.48716 12.9517 4.53917 12.5368C4.56626 12.3207 4.86383 12.0997 5.43189 11.8738Z"
                  fill="white"
                ></path>
                <defs>
                  <linearGradient
                    id="paint0_linear_3708_71538"
                    x1="12"
                    y1="0.000488281"
                    x2="12"
                    y2="23.8225"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#2CA4E0"></stop>
                    <stop offset="1" stop-color="#0D83BF"></stop>
                  </linearGradient>
                </defs>
              </svg>
            </a>
          </span>
          <span>
            <a href="#" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M7.05273 0.0724883C8.33236 0.0135792 8.74036 0.000488281 12 0.000488281C15.2596 0.000488281 15.6676 0.0146701 16.9462 0.0724883C18.2247 0.130306 19.0975 0.334306 19.8611 0.629943C20.6607 0.932125 21.3862 1.40449 21.9862 2.0154C22.5971 2.61431 23.0684 3.33867 23.3695 4.1394C23.6662 4.90303 23.8691 5.77576 23.928 7.05212C23.9869 8.33394 24 8.74194 24 12.0005C24 15.2601 23.9858 15.6681 23.928 16.9478C23.8702 18.2241 23.6662 19.0969 23.3695 19.8605C23.0684 20.6613 22.5963 21.3869 21.9862 21.9867C21.3862 22.5976 20.6607 23.0689 19.8611 23.3699C19.0975 23.6667 18.2247 23.8696 16.9484 23.9285C15.6676 23.9874 15.2596 24.0005 12 24.0005C8.74036 24.0005 8.33236 23.9863 7.05273 23.9285C5.77636 23.8707 4.90364 23.6667 4.14 23.3699C3.33919 23.0688 2.61362 22.5968 2.01382 21.9867C1.40332 21.3874 0.930889 20.6622 0.629454 19.8616C0.333818 19.0979 0.130909 18.2252 0.072 16.9489C0.0130909 15.667 0 15.259 0 12.0005C0 8.74085 0.0141818 8.33285 0.072 7.05431C0.129818 5.77576 0.333818 4.90303 0.629454 4.1394C0.931334 3.33876 1.40413 2.61356 2.01491 2.01431C2.61386 1.40394 3.3387 0.931517 4.13891 0.629943C4.90255 0.334306 5.77527 0.131397 7.05164 0.0724883H7.05273ZM16.8491 2.23249C15.5836 2.17467 15.204 2.16267 12 2.16267C8.796 2.16267 8.41636 2.17467 7.15091 2.23249C5.98036 2.28594 5.34545 2.48122 4.92218 2.64594C4.36255 2.86412 3.96218 3.12267 3.54218 3.54267C3.14405 3.93 2.83765 4.40152 2.64545 4.92267C2.48073 5.34594 2.28545 5.98085 2.232 7.1514C2.17418 8.41685 2.16218 8.79649 2.16218 12.0005C2.16218 15.2045 2.17418 15.5841 2.232 16.8496C2.28545 18.0201 2.48073 18.655 2.64545 19.0783C2.83745 19.5987 3.144 20.071 3.54218 20.4583C3.92945 20.8565 4.40182 21.163 4.92218 21.355C5.34545 21.5198 5.98036 21.715 7.15091 21.7685C8.41636 21.8263 8.79491 21.8383 12 21.8383C15.2051 21.8383 15.5836 21.8263 16.8491 21.7685C18.0196 21.715 18.6545 21.5198 19.0778 21.355C19.6375 21.1369 20.0378 20.8783 20.4578 20.4583C20.856 20.071 21.1625 19.5987 21.3545 19.0783C21.5193 18.655 21.7145 18.0201 21.768 16.8496C21.8258 15.5841 21.8378 15.2045 21.8378 12.0005C21.8378 8.79649 21.8258 8.41685 21.768 7.1514C21.7145 5.98085 21.5193 5.34594 21.3545 4.92267C21.1364 4.36303 20.8778 3.96267 20.4578 3.54267C20.0705 3.14457 19.5989 2.83817 19.0778 2.64594C18.6545 2.48122 18.0196 2.28594 16.8491 2.23249ZM10.4673 15.6998C11.3233 16.0561 12.2764 16.1042 13.1639 15.8358C14.0514 15.5675 14.8182 14.9993 15.3334 14.2284C15.8485 13.4575 16.0801 12.5316 15.9884 11.609C15.8968 10.6863 15.4876 9.82409 14.8309 9.16958C14.4123 8.75119 13.906 8.43083 13.3487 8.23156C12.7914 8.03229 12.1968 7.95906 11.6078 8.01716C11.0188 8.07526 10.45 8.26323 9.94233 8.56754C9.43468 8.87185 9.00081 9.28494 8.67197 9.77705C8.34312 10.2692 8.12748 10.8281 8.04056 11.4135C7.95365 11.999 7.99762 12.5964 8.16932 13.1629C8.34101 13.7293 8.63616 14.2506 9.03351 14.6893C9.43087 15.1279 9.92054 15.4731 10.4673 15.6998ZM7.63854 7.63903C8.2113 7.06628 8.89126 6.61195 9.6396 6.30197C10.3879 5.992 11.19 5.83246 12 5.83246C12.81 5.83246 13.6121 5.992 14.3604 6.30197C15.1087 6.61195 15.7887 7.06628 16.3615 7.63903C16.9342 8.21179 17.3885 8.89175 17.6985 9.64009C18.0085 10.3884 18.168 11.1905 18.168 12.0005C18.168 12.8105 18.0085 13.6125 17.6985 14.3609C17.3885 15.1092 16.9342 15.7892 16.3615 16.3619C15.2047 17.5187 13.6359 18.1685 12 18.1685C10.3641 18.1685 8.79527 17.5187 7.63854 16.3619C6.48181 15.2052 5.83197 13.6364 5.83197 12.0005C5.83197 10.3646 6.48181 8.79576 7.63854 7.63903ZM19.536 6.75103C19.6779 6.61715 19.7916 6.45614 19.8701 6.27755C19.9487 6.09896 19.9907 5.90642 19.9935 5.71132C19.9964 5.51622 19.9601 5.32254 19.8867 5.14174C19.8134 4.96093 19.7045 4.79668 19.5665 4.65871C19.4285 4.52074 19.2643 4.41186 19.0835 4.33851C18.9027 4.26515 18.709 4.22883 18.5139 4.23167C18.3188 4.23451 18.1263 4.27647 17.9477 4.35507C17.7691 4.43366 17.6081 4.54728 17.4742 4.68922C17.2138 4.96525 17.0712 5.33189 17.0768 5.71132C17.0823 6.09075 17.2355 6.45308 17.5038 6.72141C17.7721 6.98973 18.1345 7.14292 18.5139 7.14845C18.8933 7.15398 19.26 7.01142 19.536 6.75103Z"
                  fill="url(#paint0_radial_3763_71536)"
                ></path>
                <defs>
                  <radialGradient
                    id="paint0_radial_3763_71536"
                    cx="0"
                    cy="0"
                    r="1"
                    gradientUnits="userSpaceOnUse"
                    gradientTransform="translate(3.18867 24.1139) scale(31.3312 31.33)"
                  >
                    <stop offset="0.09" stop-color="#FA8F21"></stop>
                    <stop offset="0.78" stop-color="#D82D7E"></stop>
                  </radialGradient>
                </defs>
              </svg>
            </a>
          </span>
        </a>
      </div>
    </div>
  );
};

export default Contact;
