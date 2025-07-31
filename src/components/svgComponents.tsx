import * as React from "react";

export const CurvedArrowSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="189"
    height="104"
    viewBox="0 0 189 104"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M100.001 102C100.001 102 187.351 98.7186 187.971 0.745422"
      stroke="url(#paint0_linear_87_76)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeDasharray="4 4"
    />
    <circle cx="187.5" cy="1.5" r="4.5" fill="#6D44FA" />
    <defs>
      <linearGradient
        id="paint0_linear_87_76"
        x1="187.971"
        y1="98.1102"
        x2="100.001"
        y2="51.3712"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6D44FA" />
        <stop offset="1" stopColor="#6D44FA" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const StraightArrowSVG = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    width="192"
    height="1"
    viewBox="0 0 192 1"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="M0.5 0.5H191.5"
      stroke="url(#paint0_linear_87_77)"
      strokeLinecap="round"
      strokeDasharray="4 4"
    />
    <defs>
      <linearGradient
        id="paint0_linear_87_77"
        x1="191.5"
        y1="1"
        x2="0.5"
        y2="1"
        gradientUnits="userSpaceOnUse"
      >
        <stop stopColor="#6D44FA" />
        <stop offset="1" stopColor="#6D44FA" stopOpacity="0.1" />
      </linearGradient>
    </defs>
  </svg>
);

export const PhoneCircleSVG = ({ className }: { className?: string }) => (
  <svg
    className={className}
    width="48"
    height="48"
    viewBox="0 0 48 48"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="24" cy="24" r="23" stroke="#6D44FA" strokeWidth="2" />
    <path
      d="M32.5 25.5C31.5 25.5 30.5 25.5 29.5 25.5C28.5 25.5 27.5 25.5 26.5 25.5C25.5 25.5 24.5 25.5 23.5 25.5C22.5 25.5 21.5 25.5 20.5 25.5C19.5 25.5 18.5 25.5 17.5 25.5C16.5 25.5 15.5 25.5 14.5 25.5C13.5 25.5 12.5 25.5 11.5 25.5C10.5 25.5 9.5 25.5 8.5 25.5C7.5 25.5 6.5 25.5 5.5 25.5C4.5 25.5 3.5 25.5 2.5 25.5C1.5 25.5 0.5 25.5 0.5 25.5"
      fill="white"
    />
  </svg>
);
