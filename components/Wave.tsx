interface WaveProps {
  className?: string;
}

export default function Wave({ className = "fill-white" }: WaveProps) {
  return (
    <svg
      className="absolute bottom-0 left-0 w-full"
      height="10"
      preserveAspectRatio="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <clipPath id="svgPath">
          <pattern
            id="Pattern"
            x="0"
            y="0"
            width="628"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(0.1)"
          >
            <path
              transform="scale(1, 0.5)"
              d="M314,200L628,200L628,0C584.226,0.093 548.349,22.651 471,100C393.651,177.349 354.713,200 314,200ZM0.472,0.001L0,0L0,200L314,200C273.287,200 238.424,181.424 157,100C75.894,18.894 40.609,0.146 0.472,0.001Z"
              fill="currentColor"
              className={className}
            />
          </pattern>
        </clipPath>
      </defs>
      <rect fill="url(#Pattern)" width="100%" height="10" />
    </svg>
  );
}
