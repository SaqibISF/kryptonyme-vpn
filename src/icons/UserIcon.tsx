import React, { FC, SVGProps } from "react";

const UserIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 16 17"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M8.25 0C10.8734 0 13 2.12665 13 4.75C13 6.54284 12.0067 8.10368 10.5405 8.91228C13.7134 9.97363 16 12.9698 16 16.5H0C0 12.8501 2.4442 9.77115 5.7851 8.81057C4.41505 7.97792 3.5 6.47082 3.5 4.75C3.5 2.12665 5.62665 0 8.25 0Z"
      fill="currentColor"
    />
  </svg>
);

export default UserIcon;
