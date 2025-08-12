import React, { FC, SVGProps } from "react";

const CheckedIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    viewBox="0 0 24 24"
    fill="none"
    {...props}
  >
    <path
      d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"
      fill="currentColor"
    />
    <path
      d="M8 12.1829L10.6522 15L16 9"
      stroke="white"
      strokeWidth="1.2"
      strokeMiterlimit="10"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default CheckedIcon;
