import React, { FC, SVGProps } from "react";

const ArrowRightIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 32 27"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M30.8391 15.0891C31.718 14.2102 31.718 12.7828 30.8391 11.9039L19.5891 0.653931C18.7102 -0.224976 17.2828 -0.224976 16.4039 0.653931C15.525 1.53284 15.525 2.96018 16.4039 3.83909L23.8219 11.25H2.25C1.00547 11.25 0 12.2555 0 13.5C0 14.7446 1.00547 15.75 2.25 15.75H23.8148L16.4109 23.161C15.532 24.0399 15.532 25.4672 16.4109 26.3461C17.2898 27.225 18.7172 27.225 19.5961 26.3461L30.8461 15.0961L30.8391 15.0891Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowRightIcon;
