import React from "react";

const Navbar = () => {
  return (
    <div className="w-full bg-[#005564] flex justify-between items-center py-3 pr-3">
      <div className="w-full pl-10">
        <ul className="flex gap-10 text-[22px] font-normal text-[#FFFAF6]">
          <li>Shop</li>
          <li>About</li>
          <li>Resturent</li>
          <li>Login</li>
        </ul>
      </div>
      <div className="w-full">
        <p className="text-center text-[36px] font-bold text-[#FFFAF6]">Little Sesame</p>

      </div>
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-2 items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13"
            height="20"
            viewBox="0 0 13 20"
            fill="none"
          >
            <g clip-path="url(#clip0_2059_488)">
              <path
                d="M6.47525 20.0005C5.70083 18.7247 4.93912 17.4864 4.20279 16.2606C2.83169 13.9967 1.63833 11.6327 0.660796 9.18121C0.368803 8.49328 0.165678 7.76782 0.0514205 7.01735C-0.0882279 6.02924 0.0387252 5.0161 0.406889 4.09052C0.775053 3.16495 1.37173 2.33943 2.15884 1.68902C3.00943 0.888523 4.08853 0.338179 5.2438 0.113038C6.41177 -0.112103 7.61783 0.000467593 8.72232 0.438241C9.83951 0.813476 10.8297 1.4889 11.5788 2.40197C12.3278 3.30253 12.7975 4.40322 12.9499 5.55394C13.0768 6.56707 12.9499 7.60522 12.5563 8.56832C11.8327 10.5946 10.9186 12.5583 9.82681 14.422C8.79849 16.2106 7.71939 17.9867 6.66568 19.7628C6.6022 19.8504 6.53873 19.9379 6.47525 20.013V20.0005ZM3.3522 6.04174C3.3522 6.65463 3.54263 7.255 3.88541 7.76782C4.22818 8.28064 4.7233 8.68089 5.29458 8.90603C5.86587 9.14368 6.50064 9.20622 7.11001 9.08114C7.71939 8.95607 8.27798 8.66839 8.72232 8.23061C9.16665 7.79284 9.45865 7.24249 9.5856 6.64212C9.71255 6.04174 9.64908 5.41635 9.40787 4.8535C9.16665 4.29065 8.7604 3.80284 8.25259 3.46513C7.73208 3.12742 7.12271 2.9398 6.50064 2.9398C5.66275 2.9398 4.86294 3.26501 4.27896 3.85288C3.68228 4.44074 3.3522 5.22874 3.3522 6.04174Z"
                fill="#C0D9D9"
              />
            </g>

            <defs>
              <clipPath id="clip0_2059_488">
                <rect
                  className="bg-[#C0D9D9]"
                  width="13"
                  height="20"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
          <span className="text-[#FFFAF6] font-normal leading-[100%] text-center text-[22px]">Find Our Hummus</span>
        </div>
        <div className="w-fit bg-[#C0D9D9] text-[24px] font-normal py-[15.5px] px-4 rounded-[4px]">
          Cart( 0 )
        </div>
      </div>
    </div>
  );
};

export default Navbar;
