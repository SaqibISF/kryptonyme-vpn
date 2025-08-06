import React, { FC, SVGProps } from "react";

const MobileIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M2.5 0C1.39688 0 0.5 0.896875 0.5 2V14C0.5 15.1031 1.39688 16 2.5 16H9.5C10.6031 16 11.5 15.1031 11.5 14V2C11.5 0.896875 10.6031 0 9.5 0H2.5ZM5 13.5H7C7.275 13.5 7.5 13.725 7.5 14C7.5 14.275 7.275 14.5 7 14.5H5C4.725 14.5 4.5 14.275 4.5 14C4.5 13.725 4.725 13.5 5 13.5Z"
      fill="currentColor"
    />
  </svg>
);

export default MobileIcon;
