import cls from "./Button.module.css";

export const Button = ({ isDisabled, isActive, children }) => {
  return (
    <button
      className={`${cls.btn} ${isActive ? cls.isActive : ""}`}
      disabled={isDisabled}
    >
      {children}
    </button>
  );
};
