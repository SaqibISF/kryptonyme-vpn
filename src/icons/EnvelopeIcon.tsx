import React, { FC, SVGProps } from "react";

const EnvelopeIcon: FC<SVGProps<SVGSVGElement>> = ({
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 17 13"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M16.5 10.8984L13.2803 6.875L12.9688 6.48438L11.4062 7.73438L11.7188 8.12402L15.2188 12.5H1.78125L5.28125 8.12402L5.59375 7.73438L4.42188 6.79688L4.03223 6.48438L3.71973 6.875L0.5 10.8984V2.88574L8.17188 9.54004L8.49902 9.82422L8.82715 9.54004L16.5 2.88574V10.8984ZM16.1963 0.5L8.49902 7.1748L0.803711 0.5H16.1963Z"
      fill="currentColor"
      stroke="currentColor"
    />
  </svg>
);

export default EnvelopeIcon;
