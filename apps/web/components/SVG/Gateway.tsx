import { useTheme } from 'next-themes';
import React from 'react';
const Gateway = () => {
  const { theme } = useTheme();
  return (
    <svg
      width="586"
      height="794"
      viewBox="0 0 586 794"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        cx="293"
        cy="293"
        r="207"
        transform="rotate(-45 293 293)"
        fill="url(#paint0_linear_793_1631)"
      />
      <circle
        cx="293"
        cy="293"
        r="207"
        transform="rotate(-45 293 293)"
        fill="url(#pattern0)"
        fillOpacity="0.3"
        style={{ mixBlendMode: 'color-burn' }}
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M559 791V295.5C559 148.316 439.684 29 292.5 29C145.316 29 26 148.316 26 295.5V791H292.5H559ZM292.5 28C144.764 28 25 147.764 25 295.5V792H560V295.5C560 147.764 440.236 28 292.5 28Z"
        fill="url(#paint1_linear_793_1631)"
      />
      <rect
        x="8"
        y="640"
        width="573"
        height="154"
        fill="url(#paint2_linear_793_1631)"
      />
      <defs>
        <pattern
          id="pattern0"
          patternContentUnits="objectBoundingBox"
          width="0.869565"
          height="0.869565"
        >
          <use xlinkHref="#image0_793_1631" transform="scale(0.000724638)" />
        </pattern>
        <linearGradient
          id="paint0_linear_793_1631"
          x1="293"
          y1="86"
          x2="293"
          y2="500"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EFBB73" />
          <stop offset="0.411458" stopColor="#EB5F49" />
          <stop offset="0.963542" stopColor="#9462F7" />
        </linearGradient>
        <linearGradient
          id="paint1_linear_793_1631"
          x1="292.5"
          y1="28"
          x2="292.5"
          y2="792"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#EFBB73" />
          <stop offset="0.510417" stopColor="#EB5F49" />
          <stop offset="1" stopColor="#9462F7" />
        </linearGradient>
        <linearGradient
          id="paint2_linear_793_1631"
          x1="294.5"
          y1="640"
          x2="294.5"
          y2="794"
          gradientUnits="userSpaceOnUse"
        >
          <stop
            stopColor={theme === 'dark' ? '#1E1C1E' : '#EAE4D9'}
            stopOpacity="0"
          />
          <stop
            offset="0.96875"
            stopColor={theme === 'dark' ? '#1E1C1E' : '#EAE4D9'}
          />
        </linearGradient>
        <image
          id="image0_793_1631"
          width="1200"
          height="1200"
        />
      </defs>
    </svg>
  );
};

export default Gateway;