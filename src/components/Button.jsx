export default function Button({
  children,
  onClick,
  disabled,
  variant = "default",
  type = "button",
}) {
  const baseClasses =
    "px-4 py-2 rounded-lg transition-colors focus:outline-none cursor-pointer";

  const variants = {
    default: "bg-gray-200 hover:bg-gray-300 text-gray-800 disabled:opacity-50",
    primary:
      "bg-teal-600 hover:bg-teal-700 text-white shadow-md disabled:opacity-50",
    danger:
      "bg-red-500 hover:bg-red-600 text-white shadow-md disabled:opacity-50",
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
