import React from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch } from "@fortawesome/free-solid-svg-icons";

const Button = ({ children, variant = "primary", onClick, disabled, loading }) => {
  const variantStyles = {
    primary: "bg-blue-500 hover:bg-blue-600 text-white",
    secondary: "bg-gray-500 hover:bg-gray-600 text-white",
    danger: "bg-red-500 hover:bg-red-600 text-white",
  };

  return (
    <button
      className={`px-4 py-2 rounded flex items-center justify-center gap-2 
        ${variantStyles[variant]} 
        ${disabled || loading ? "bg-gray-400 cursor-not-allowed opacity-50" : ""} 
        ${loading ? "animate-custom-pulse" : ""}
`}
      onClick={disabled || loading ? undefined : onClick}
      disabled={disabled || loading}
    >
      {loading ? <FontAwesomeIcon icon={faCircleNotch} spin size="lg" /> : children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  variant: PropTypes.oneOf(["primary", "secondary", "danger"]),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
};

export default Button;
