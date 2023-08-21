import Image from "next/image";
import React from "react";

const BundleHighlights = () => {
  return (
    <div className="flex flex-col bg-[#C0D9D9]">
      <div className="px-[108px] py-[60px] flex items-center gap-[48px]">
        <h2 className="text-[#005564] w-full text-[70px] font-bold leading-[56px] uppercase whitespace-nowrap">
          Bundle Highlights
        </h2>
        <p className="w-full text-[16px] font-normal leading-[120%]">
          Meet our tomato brand, Bianco Di Napoli. They are grown organically in
          California, bringing together multigenerational family farm and one of
          the best pizza chefs in America.{" "}
        </p>
      </div>

      <div className="flex gap-6 px-6 pb-6">
        <div className="w-[73.33%]">
          <Image
            src="https://tuk-cdn.s3.amazonaws.com/can-uploader/1.png"
            className="w-full"
            width={1056}
            height={586.6}
            alt="img"
          />
        </div>
        <div className="relative w-[26.67%] bg-[#FFFAF6] rounded-[8px] border-[2px] border-[#005564]">
          <div className="flex divide-x-[2px] border-b-[2px] border-[#005564] divide-[#005564]">
            <div className="w-full py-4 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
              >
                <path d="M10 1L2 9L10 17" stroke="#005564" stroke-width="2" />
              </svg>
            </div>
            <div className="w-full py-4 flex justify-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="11"
                height="18"
                viewBox="0 0 11 18"
                fill="none"
              >
                <path d="M1 1L9 9L1 17" stroke="#005564" stroke-width="2" />
              </svg>
            </div>
          </div>
          <div className="flex flex-col gap-6 px-6 pt-6">
            <h2 className="uppercase text-[36px] font-bold text-[#005564]">
              The Farm
            </h2>
            <p className="text-[16px] font-normal leading-[120%] text-[#005564]">
              Made with sustainably-sourced, organic materials. Talanted,
              brilliant, incredible, amazing, showstopper, spectacular, never
              the same, totally unique, completely not ever been done before,
              unafraid to reference or not reference.
            </p>
          </div>
          <div className="flex gap-[4px] absolute bottom-6 right-6">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle cx="4" cy="4" r="4" fill="#005564" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle opacity="0.2" cx="4" cy="4" r="4" fill="#005564" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle opacity="0.2" cx="4" cy="4" r="4" fill="#005564" />
            </svg>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="8"
              height="8"
              viewBox="0 0 8 8"
              fill="none"
            >
              <circle opacity="0.2" cx="4" cy="4" r="4" fill="#005564" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BundleHighlights;
