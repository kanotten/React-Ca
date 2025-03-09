export default function Button({
  children,
  onClick,
  disabled,
  variant = "default",
  type = "button",
}) {
  const baseClasses = "px-4 py-2 rounded transition-colors";

  const variants = {
    default: "bg-gray-300 hover:bg-gray-400 disabled:opacity-50",
    primary: "bg-blue-500 hover:bg-blue-600 text-white disabled:opacity-50",
    danger: "bg-red-500 hover:bg-red-600 text-white disabled:opacity-50",
    success: "bg-green-500 hover:bg-green-600 text-white disabled:opacity-50",
  };

  const classes = `${baseClasses} ${variants[variant]}`;

  return (
    <button
      onClick={onClick}
      disabled={disabled}
      type={type}
      className={classes}
    >
      {children}
    </button>
  );
}
