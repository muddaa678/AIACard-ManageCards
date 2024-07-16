import type { NextPage } from "next";
import { useMemo, type CSSProperties } from "react";

export type ActionColumnsType = {
  className?: string;

  /** Style props */
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
};

const ActionColumns: NextPage<ActionColumnsType> = ({
  className = "",
  propWidth,
  propPadding,
}) => {
  const actionColumnsStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
    };
  }, [propWidth, propPadding]);

  return (
    <div
      className={`h-[23.625rem] w-[20.281rem] flex flex-col items-end justify-start py-[0rem] pr-[0.312rem] pl-[0rem] box-border gap-[1.4rem] max-w-full text-center text-[0.625rem] text-white font-montserrat ${className}`}
      style={actionColumnsStyle}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="lazy"
        alt=""
        src="/14@2x.png"
      />
      <div className="self-stretch flex flex-row items-start justify-end py-[0rem] pr-[0.687rem] pl-[1.062rem]">
        <div className="flex-1 flex flex-row items-start justify-start py-[0rem] pr-[0rem] pl-[0.062rem] gap-[1.643rem]">
          <div className="flex-1 flex flex-col items-end justify-start gap-[0.475rem]">
            <div className="self-stretch flex flex-row items-start justify-between py-[0rem] pr-[0rem] pl-[0.125rem] gap-[1.25rem]">
              <div className="h-[2.938rem] w-[2.938rem] relative">
                <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
                <img
                  className="absolute top-[0.95rem] left-[0.95rem] w-[1.031rem] h-[1.113rem] object-contain z-[1]"
                  loading="lazy"
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
                  loading="lazy"
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
                  loading="lazy"
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
      <div className="rounded-8xs flex flex-col items-start justify-start pt-[0.5rem] pb-[0.562rem] pr-[0.875rem] pl-[0.937rem] gap-[0.5rem] z-[1] text-left text-[0.75rem] border-[2px] border-solid border-gray">
        <b className="relative">
          Copy this ID to transfer funds to this AIA Card
        </b>
        <div className="w-[19.938rem] h-[4.188rem] relative rounded-8xs box-border hidden border-[2px] border-solid border-gray" />
        <div className="flex flex-row items-start justify-start gap-[0.875rem] text-[0.688rem]">
          <div className="flex flex-col items-start justify-start pt-[0.25rem] px-[0rem] pb-[0rem]">
            <div className="relative">Ym5XcTROYVhRZ0k1ckJRNUtNcGVzNHpW</div>
          </div>
          <div className="h-[1.313rem] w-[1.313rem] relative z-[2]">
            <div className="absolute top-[0rem] left-[0rem] rounded-[50%] bg-gray w-full h-full" />
            <img
              className="absolute top-[0.375rem] left-[0.375rem] w-[0.563rem] h-[0.625rem] object-contain z-[1]"
              loading="lazy"
              alt=""
              src="/muddashir-siddique-11-1@2x.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ActionColumns;
