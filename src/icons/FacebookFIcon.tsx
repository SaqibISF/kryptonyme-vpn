import React, { FC, SVGProps } from "react";

const FacebookFIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 10 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.72312 9L9.1675 6.10437H6.38906V4.22531C6.38906 3.43313 6.77718 2.66094 8.02156 2.66094H9.28468V0.195625C9.28468 0.195625 8.13843 0 7.0425 0C4.75437 0 3.25875 1.38688 3.25875 3.8975V6.10437H0.715309V9H3.25875V16H6.38906V9H8.72312Z"
      fill="currentColor"
    />
  </svg>
);

export default FacebookFIcon;
