import React, { FC, SVGProps } from "react";

const WindowsIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 33"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0 5.08828L12.9094 3.30938V15.7828H0V5.08828ZM0 27.9117L12.9094 29.6906V17.3719H0V27.9117ZM14.3297 29.8805L31.5 32.25V17.3719H14.3297V29.8805ZM14.3297 3.11953V15.7828H31.5V0.75L14.3297 3.11953Z"
      fill="currentColor"
    />
  </svg>
);

export default WindowsIcon;
