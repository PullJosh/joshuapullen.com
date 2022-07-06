import { withOGImage } from "next-api-og-image";

function OGImage({ name }) {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        width: "100vw",
        height: "100vh",
        backgroundColor: "#4f46e5",
      }}
    >
      <h1
        style={{
          display: "block",
          color: "white",
          fontFamily: "sans-serif",
          fontSize: 90,
          maxWidth: "60%",
          margin: "30px 40px",
        }}
      >
        {name}
      </h1>
      <svg
        style={{
          position: "fixed",
          bottom: 80,
          left: 0,
          width: "100vw",
          height: 40,
        }}
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
              patternTransform="scale(0.4)"
            >
              <path
                transform="scale(1, 0.5)"
                d="M314,200L628,200L628,0C584.226,0.093 548.349,22.651 471,100C393.651,177.349 354.713,200 314,200ZM0.472,0.001L0,0L0,200L314,200C273.287,200 238.424,181.424 157,100C75.894,18.894 40.609,0.146 0.472,0.001Z"
                fill="#3730a3"
              />
            </pattern>
          </clipPath>
        </defs>
        <rect fill="url(#Pattern)" width="100%" height="40" />
      </svg>
      <div
        style={{
          position: "fixed",
          bottom: 0,
          left: 0,
          width: "100vw",
          height: 80,
          background: "#3730a3",
        }}
      />
      <img
        src="https://u.cubeupload.com/PullJosh/joshtransparentbg.png"
        style={{
          position: "fixed",
          right: 0,
          bottom: -200,
          height: "calc(100vh + 150px)",
        }}
      />
    </div>
  );
}

export default withOGImage({
  template: {
    react: OGImage,
  },
  cacheControl: "public, max-age=604800, immutable",
  dev: {
    inspectHtml: false,
  },
});
