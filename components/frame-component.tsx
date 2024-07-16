import type { NextPage } from "next";

export type FrameComponentType = {
  className?: string;
};

const FrameComponent: NextPage<FrameComponentType> = ({ className = "" }) => {
  return (
    <div
      className={`w-[14.75rem] flex flex-col items-start justify-start pt-[10.625rem] px-[1.062rem] pb-[1.937rem] box-border relative gap-[9.812rem] text-left text-[0.75rem] text-white font-montserrat mq1025:hidden mq750:pt-[6.875rem] mq750:pb-[1.25rem] mq750:box-border ${className}`}
    >
      <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.187rem] pl-[0.062rem]">
        <div className="flex-1 flex flex-col items-start justify-start gap-[2.437rem]">
          <div className="flex flex-row items-start justify-start py-[0rem] px-[3.25rem]">
            <a className="[text-decoration:none] relative font-bold text-[inherit] inline-block min-w-[2.375rem] z-[1]">
              Home
            </a>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start gap-[1.562rem]">
            <div className="self-stretch flex flex-col items-start justify-start gap-[1.562rem]">
              <div className="flex flex-row items-start justify-start py-[0rem] px-[3.375rem]">
                <b className="relative inline-block min-w-[4.438rem] z-[1]">
                  Buy Crypto
                </b>
              </div>
              <button className="cursor-pointer [border:none] pt-[0.25rem] px-[0.187rem] pb-[0.218rem] bg-goldenrod self-stretch rounded-3xs flex flex-row items-start justify-start gap-[0.843rem] z-[1]">
                <div className="h-[2.813rem] w-[12.375rem] relative rounded-3xs bg-goldenrod hidden" />
                <div className="h-[2.344rem] w-[2.344rem] relative z-[2]">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
                  <img
                    className="absolute top-[0.806rem] left-[0.725rem] w-[0.969rem] h-[0.806rem] object-contain z-[1]"
                    alt=""
                    src="/32@2x.png"
                  />
                </div>
                <div className="flex flex-col items-start justify-start pt-[0.687rem] px-[0rem] pb-[0rem]">
                  <b className="relative text-[0.75rem] inline-block font-montserrat text-black text-left min-w-[5.625rem] z-[2]">
                    Manage Cards
                  </b>
                </div>
              </button>
            </div>
            <div className="flex flex-row items-start justify-start pt-[0rem] px-[3.375rem] pb-[0.937rem]">
              <b className="relative inline-block min-w-[4.625rem] z-[1]">
                Transaction
              </b>
            </div>
            <div className="self-stretch flex flex-row items-start justify-end py-[0rem] px-[2.25rem]">
              <div className="flex flex-col items-start justify-start gap-[2.5rem]">
                <b className="relative inline-block min-w-[5.125rem] z-[1]">
                  Beneficiaries
                </b>
                <div className="flex flex-row items-start justify-start py-[0rem] px-[0.062rem]">
                  <b className="relative inline-block min-w-[4.938rem] z-[1]">
                    ATM Locator
                  </b>
                </div>
                <b className="relative inline-block min-w-[6.813rem] z-[1]">
                  Account Settings
                </b>
                <b className="relative inline-block min-w-[4.563rem] z-[1]">
                  Need Help?
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button className="cursor-pointer [border:none] pt-[0.562rem] px-[3.625rem] pb-[0.625rem] bg-orangered self-stretch rounded-8xs flex flex-row items-start justify-start gap-[0.625rem] z-[1]">
        <div className="h-[2.5rem] w-[12.375rem] relative rounded-8xs bg-orangered hidden" />
        <div className="flex flex-col items-start justify-start pt-[0.187rem] px-[0rem] pb-[0rem]">
          <b className="relative text-[0.75rem] inline-block font-montserrat text-white text-left min-w-[2.813rem] z-[1]">
            Logout
          </b>
        </div>
        <img
          className="h-[1.313rem] w-[1.375rem] relative object-contain min-h-[1.313rem] z-[1]"
          alt=""
          src="/untitled-design-50-1@2x.png"
        />
      </button>
      <div className="w-full h-[174.563rem] absolute !m-[0] right-[0rem] bottom-[-124.75rem] left-[0rem]">
        <div className="absolute top-[0rem] left-[0rem] bg-black box-border w-full h-full border-r-[2px] border-solid border-gray" />
        <img
          className="absolute top-[2.5rem] left-[1.063rem] w-[12.375rem] h-[3.313rem] object-contain z-[1]"
          loading="lazy"
          alt=""
          src="/ai-analysis-logo-13-1@2x.png"
        />
        <div className="absolute top-[23.625rem] left-[1.313rem] w-[2.313rem] h-[2.313rem] z-[1]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
          <img
            className="absolute top-[0.8rem] left-[0.719rem] w-[0.875rem] h-[0.719rem] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/34@2x.png"
          />
        </div>
        <div className="absolute top-[20.188rem] left-[1.313rem] w-[2.313rem] h-[2.313rem] z-[1]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
          <img
            className="absolute top-[0.719rem] left-[0.719rem] w-[0.956rem] h-[0.956rem] object-contain z-[1]"
            loading="lazy"
            alt=""
            src="/33@2x.png"
          />
        </div>
        <div className="absolute top-[13.313rem] left-[1.313rem] w-[2.344rem] h-[2.344rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full z-[1]" />
          <img
            className="absolute top-[0.688rem] left-[0.688rem] w-[0.938rem] h-[1rem] object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/muddashir-siddique-10-1@2x.png"
          />
        </div>
        <div className="absolute top-[27.063rem] left-[1.313rem] w-[2.313rem] h-[2.313rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full z-[1]" />
          <img
            className="absolute top-[0.688rem] left-[0.813rem] w-[0.688rem] h-[1rem] object-contain z-[2]"
            alt=""
            src="/muddashir-siddique-22-1@2x.png"
          />
        </div>
        <div className="absolute top-[10rem] left-[1.313rem] w-[2.188rem] h-[2.188rem]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full z-[1]" />
          <img
            className="absolute top-[0.625rem] left-[0.625rem] w-[1rem] h-[0.938rem] object-contain z-[2]"
            loading="lazy"
            alt=""
            src="/101@2x.png"
          />
        </div>
        <div className="absolute top-[33.938rem] left-[1.313rem] w-[2.313rem] h-[2.313rem] z-[1]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
          <img
            className="absolute top-[0.719rem] left-[0.638rem] w-[1.038rem] h-[0.956rem] object-contain z-[1]"
            alt=""
            src="/36@2x.png"
          />
        </div>
        <div className="absolute top-[30.5rem] left-[1.313rem] w-[2.313rem] h-[2.313rem] z-[1]">
          <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
          <img
            className="absolute top-[0.638rem] left-[0.638rem] w-[1.038rem] h-[1.038rem] object-contain z-[1]"
            alt=""
            src="/35@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default FrameComponent;
