function ColorfulBgCircles({
  top,
  right,
  bottom,
  left,
  height,
  width,
  color,
  blur = 100,
  opacity = 0.3,
  className = "",
  styles = {},
}) {
  return (
    <div
      className={`
        absolute
        pointer-events-none
        rounded-full
        ${className}
      `}
      style={{
        top,
        right,
        bottom,
        left,
        width: typeof width === "number" ? `${width}px` : width,
        height: typeof height === "number" ? `${height}px` : height,
        backgroundColor: color,
        filter: `blur(${blur}px)`,
        opacity,
        willChange: "transform",
        ...styles,
      }}
    />
  );
}

export default ColorfulBgCircles;