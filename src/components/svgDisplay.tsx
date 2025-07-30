const SvgDisplay = ({
  circleWidth,
  circleHeight,
  vector1Width,
  vector1Height,
  vector2Width,
  vector2Height,
}: {
  circleWidth: number;
  circleHeight: number;
  vector1Width: number;
  vector1Height: number;
  vector2Width: number;
  vector2Height: number;
}) => {
  return (
    <div className="relative">
      {/* Circle SVG */}
      <svg
        width={circleWidth}
        height={circleHeight}
        viewBox="0 0 480 340"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute"
      >
        <path
          d="M408.999 338.996C502.334 245.66 502.334 94.3338 408.999 0.998518M71.0015 338.996C-22.3338 245.66 -22.3338 94.3338 71.0015 0.998518"
          stroke="white"
          strokeWidth="2"
        />
      </svg>

      {/* Vector 1 */}
      <svg
        width={vector1Width}
        height={vector1Height}
        viewBox="0 0 188 98"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute left-0 top-0"
      >
        <path
          d="M77 0.99707L77.6523 0.239138L77.3711 -0.00292969H77V0.99707ZM177.167 91.7983C177.167 94.7439 179.554 97.1317 182.5 97.1317C185.446 97.1317 187.833 94.7439 187.833 91.7983C187.833 88.8528 185.446 86.465 182.5 86.465C179.554 86.465 177.167 88.8528 177.167 91.7983ZM0.5 0.99707L0.5 1.99707H77V0.99707V-0.00292969H0.5L0.5 0.99707ZM77 0.99707L76.3477 1.755L181.848 92.5563L182.5 91.7983L183.152 91.0404L77.6523 0.239138L77 0.99707Z"
          fill="white"
        />
      </svg>

      {/* Vector 2 */}
      <svg
        width={vector2Width}
        height={vector2Height}
        viewBox="0 0 188 98"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute right-0 top-0"
      >
        <path
          d="M111.5 0.99707L110.848 0.239138L111.129 -0.00292969H111.5V0.99707ZM11.3333 91.7983C11.3333 94.7439 8.94553 97.1317 6 97.1317C3.05447 97.1317 0.666672 94.7439 0.666672 91.7983C0.666672 88.8528 3.05447 86.465 6 86.465C8.94553 86.465 11.3333 88.8528 11.3333 91.7983ZM188 0.99707L188 1.99707H111.5V0.99707V-0.00292969H188L188 0.99707ZM111.5 0.99707L112.152 1.755L6.65233 92.5563L6 91.7983L5.34767 91.0404L110.848 0.239138L111.5 0.99707Z"
          fill="white"
        />
      </svg>
    </div>
  );
};

export default SvgDisplay;
