import PropTypes from "prop-types";
import React from "react";

const Step = ({
  className,
  stepList,
  completeColor,
  notCompleteColor,
  notCompleteCircleColor,
  lineWidth,
}) => (
  <div className={`${className} flex w-full overflow-scroll`}>
    {stepList.map((v, i) => (
      <div
        className="flex items-center"
        key={Math.random().toString(36).substring(2)}
      >
        <div
          className={[
            `min-w-[15px] min-h-[15px] w-[15px] h-[15px] rounded-[50%]`,
            v.status
              ? completeColor
              : `bg-[#fff] border-[3px] border-solid ${notCompleteCircleColor}`,
          ].join(" ")}
        />
        {stepList.length - 1 !== i && (
          <div
            className={[
              "h-1",
              lineWidth,
              v.status && stepList[i + 1]?.status === true
                ? completeColor
                : notCompleteColor,
            ].join(" ")}
          />
        )}
      </div>
    ))}
  </div>
);

export default Step;
Step.propTypes = {
  className: PropTypes.string,
  stepList: PropTypes.arrayOf(PropTypes.shape({ status: PropTypes.bool })),
  completeColor: PropTypes.string,
  notCompleteColor: PropTypes.string,
  notCompleteCircleColor: PropTypes.string,
  lineWidth: PropTypes.string,
};

Step.defaultProps = {
  className: "",
  stepList: [],
  completeColor: "bg-blue-300",
  notCompleteColor: "bg-gray-300",
  notCompleteCircleColor: "border-gray-300",
  lineWidth: "w-[95px]",
};
