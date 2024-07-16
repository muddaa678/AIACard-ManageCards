import type { NextPage } from "next";
import ActionColumns from "./action-columns";

export type CardContainerType = {
  className?: string;
};

const CardContainer: NextPage<CardContainerType> = ({ className = "" }) => {
  return (
    <div
      className={`self-stretch flex flex-col items-start justify-start gap-[0.937rem] max-w-full text-left text-[1.25rem] text-white font-montserrat ${className}`}
    >
      <div className="w-[65.125rem] flex flex-row items-start justify-start py-[0rem] px-[0.5rem] box-border max-w-full">
        <div className="flex-1 flex flex-row items-start justify-between max-w-full gap-[1.25rem] mq1025:flex-wrap">
          <div className="flex flex-row items-start justify-start gap-[0.437rem]">
            <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1rem]">
              Muddashir Personal
            </h2>
            <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
              <div className="w-[1.313rem] h-[1.313rem] relative">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
                <img
                  className="absolute top-[0.438rem] left-[0.438rem] w-[0.5rem] h-[0.5rem] object-contain z-[1]"
                  loading="lazy"
                  alt=""
                  src="/muddashir-siddique-12-1@2x.png"
                />
              </div>
            </div>
          </div>
          <div className="w-[14.313rem] flex flex-col items-start justify-start pt-[0.062rem] pb-[0rem] pr-[1.562rem] pl-[0rem] box-border">
            <div className="self-stretch flex flex-row items-start justify-start gap-[0.5rem]">
              <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1rem]">
                Muddashir Work
              </h2>
              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <div className="w-[1.313rem] h-[1.313rem] relative">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
                  <img
                    className="absolute top-[0.438rem] left-[0.438rem] w-[0.5rem] h-[0.5rem] object-contain z-[1]"
                    alt=""
                    src="/muddashir-siddique-12-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
            <div className="flex flex-row items-start justify-start gap-[0.437rem]">
              <h2 className="m-0 relative text-inherit font-bold font-inherit mq450:text-[1rem]">
                Muddashir Saving
              </h2>
              <div className="flex flex-col items-start justify-start pt-[0.125rem] px-[0rem] pb-[0rem]">
                <div className="w-[1.313rem] h-[1.313rem] relative">
                  <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
                  <img
                    className="absolute top-[0.438rem] left-[0.438rem] w-[0.5rem] h-[0.5rem] object-contain z-[1]"
                    alt=""
                    src="/muddashir-siddique-12-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="self-stretch flex flex-row items-end justify-start py-[0rem] pr-[0.187rem] pl-[0rem] box-border gap-[2.562rem] max-w-full text-center text-[0.625rem] mq750:gap-[1.25rem] mq1125:flex-wrap">
        <ActionColumns />
        <div className="h-[21.688rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[2.062rem] box-border">
          <div className="w-[0.188rem] flex-1 relative box-border border-r-[3px] border-solid border-gray" />
        </div>
        <ActionColumns propWidth="19.938rem" propPadding="unset" />
        <div className="h-[21.688rem] flex flex-col items-start justify-end pt-[0rem] px-[0rem] pb-[2.062rem] box-border">
          <div className="w-[0.188rem] flex-1 relative box-border border-r-[3px] border-solid border-gray" />
        </div>
        <div className="h-[23.813rem] w-[19.938rem] flex flex-col items-end justify-start gap-[1.462rem]">
          <img
            className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
            loading="lazy"
            alt=""
            src="/14@2x.png"
          />
          <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.687rem] pl-[1.062rem]">
            <div className="flex-1 flex flex-row items-start justify-start gap-[1.643rem]">
              <div className="flex-1 flex flex-col items-end justify-start gap-[0.475rem]">
                <div className="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[0.125rem] gap-[1.25rem]">
                  <div className="h-[2.938rem] w-[2.938rem] relative">
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
                    <img
                      className="absolute top-[0.95rem] left-[0.95rem] w-[1.031rem] h-[1.113rem] object-contain z-[1]"
                      alt=""
                      src="/screenshot-20240713-at-55100pm@2x.png"
                    />
                  </div>
                  <div className="h-[2.781rem] w-[2.781rem] relative">
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
                    <img
                      className="absolute top-[0.875rem] left-[0.875rem] w-[1.113rem] h-[1.031rem] object-contain z-[1]"
                      alt=""
                      src="/screenshot-20240713-at-55100pm-1@2x.png"
                    />
                  </div>
                </div>
                <div className="self-stretch flex flex-row items-start justify-start gap-[1.681rem]">
                  <b className="flex-1 relative inline-block min-w-[3.256rem] shrink-0">
                    Recharge
                  </b>
                  <b className="flex-1 relative inline-block min-w-[2.781rem] shrink-0">
                    Transfer
                  </b>
                </div>
              </div>
              <div className="w-[3.175rem] flex flex-col items-start justify-start gap-[0.631rem]">
                <div className="flex flex-row items-start justify-start py-[0rem] px-[0.187rem]">
                  <div className="h-[2.781rem] w-[2.781rem] relative shrink-0">
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
                    <img
                      className="absolute top-[0.875rem] left-[0.794rem] w-[1.269rem] h-[1.031rem] object-cover z-[1]"
                      alt=""
                      src="/screenshot-20240713-at-55104pm@2x.png"
                    />
                  </div>
                </div>
                <b className="self-stretch relative inline-block min-w-[3.175rem] shrink-0">
                  View Pin
                </b>
              </div>
              <div className="w-[3.969rem] flex flex-col items-end justify-start gap-[0.631rem]">
                <div className="flex flex-row items-start justify-end py-[0rem] pr-[0.562rem] pl-[0.625rem]">
                  <div className="h-[2.781rem] w-[2.781rem] relative shrink-0">
                    <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
                    <img
                      className="absolute top-[0.875rem] left-[0.875rem] w-[1.113rem] h-[1.031rem] object-cover z-[1]"
                      alt=""
                      src="/screenshot-20240713-at-55110pm@2x.png"
                    />
                  </div>
                </div>
                <b className="self-stretch relative inline-block min-w-[3.969rem] shrink-0">
                  Report Loss
                </b>
              </div>
            </div>
          </div>
          <div className="self-stretch rounded-8xs flex flex-col items-start justify-start pt-[0rem] pb-[0.812rem] pr-[0.875rem] pl-[0.937rem] gap-[0.75rem] z-[1] text-left text-[0.75rem] border-[2px] border-solid border-gray">
            <div className="self-stretch flex flex-row items-start justify-start py-[0rem] pr-[0.875rem] pl-[0rem]">
              <div className="flex-1 flex flex-col items-start justify-start pt-[0.75rem] px-[0rem] pb-[0rem]">
                <b className="relative">
                  Copy this ID to transfer funds to this AIA Card
                </b>
              </div>
              <div className="h-[1.313rem] w-[1.313rem] relative z-[2] ml-[-2.188rem]">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
                <img
                  className="absolute top-[0.375rem] left-[0.375rem] w-[0.563rem] h-[0.625rem] object-contain z-[1]"
                  alt=""
                  src="/muddashir-siddique-11-1@2x.png"
                />
              </div>
            </div>
            <div className="w-[19.938rem] h-[4.188rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-gray" />
            <div className="relative text-[0.688rem]">
              Ym5XcTROYVhRZ0k1ckJRNUtNcGVzNHpW
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
