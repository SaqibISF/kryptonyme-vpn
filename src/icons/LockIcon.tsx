import React, { FC, SVGProps } from "react";

const LockIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 13 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M3.9375 4.59349V5.90599H8.3125V4.59349C8.3125 3.3849 7.33359 2.40599 6.125 2.40599C4.91641 2.40599 3.9375 3.3849 3.9375 4.59349ZM2.1875 5.90599V4.59349C2.1875 2.41966 3.95117 0.655991 6.125 0.655991C8.29883 0.655991 10.0625 2.41966 10.0625 4.59349V5.90599H10.5C11.4652 5.90599 12.25 6.69076 12.25 7.65599V12.906C12.25 13.8712 11.4652 14.656 10.5 14.656H1.75C0.784766 14.656 0 13.8712 0 12.906V7.65599C0 6.69076 0.784766 5.90599 1.75 5.90599H2.1875Z"
      fill="currentColor"
    />
  </svg>
);

export default LockIcon;
