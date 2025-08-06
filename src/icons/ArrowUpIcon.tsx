import React, { FC, SVGProps } from "react";

const ArrowUpIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 12 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M6.70664 0.293762C6.31602 -0.0968628 5.68164 -0.0968628 5.29102 0.293762L0.291016 5.29376C-0.0996094 5.68439 -0.0996094 6.31876 0.291016 6.70939C0.681641 7.10001 1.31602 7.10001 1.70664 6.70939L5.00039 3.41251V13C5.00039 13.5531 5.44727 14 6.00039 14C6.55352 14 7.00039 13.5531 7.00039 13V3.41251L10.2941 6.70626C10.6848 7.09689 11.3191 7.09689 11.7098 6.70626C12.1004 6.31564 12.1004 5.68126 11.7098 5.29064L6.70977 0.290637L6.70664 0.293762Z"
      fill="currentColor"
    />
  </svg>
);

export default ArrowUpIcon;
