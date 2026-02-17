import cls from "./Button.module.css";

export const Button = ({ isDisabled, isActive, children, ...props }) => {
  return (
    <button
      {...props}
      className={`${cls.btn} ${isActive ? cls.isActive : ""}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
