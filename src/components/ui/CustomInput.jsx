import { useSelector } from "react-redux";

function CustomInput({
  children,
  className = '',
  wrapperClassName = '',
  error,
  isTextArea = false,
  ...props
}) {
  const { dir } = useSelector((state) => state.lang)
  const baseStyles = `
    w-full h-full px-4 py-3
    rounded-2xl border outline-none
    placeholder:text-text-light transition-colors duration-500
    bg-linear-to-r from-primary/30 focus:to-ball-1/50 focus:placeholder:text-text-main/60
    ${className}
    ${error ? "border-red-400/50" : "border-text-light/30"}
  `;

  return (
    <div className={`relative h-full ${wrapperClassName}`}>
      {children ? (
        children
      ) : isTextArea ? (
        <textarea className={`resize-none ${baseStyles}`} {...props} />
      ) : (
        <input className={baseStyles} {...props} />
      )}

      {error && (
        <span
          className={`
            absolute ${dir == "ltr" ? "right-2" : "left-2"} -bottom-2.5 rounded-full border border-red-400/80 bg-bg-surface py-0.5 px-1 text-[11px] text-red-400/80 z-10
          `}
        >
          {error}
        </span>
      )}
    </div>
  );
}

export default CustomInput;