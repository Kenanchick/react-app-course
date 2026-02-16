import ReactLogo from "../../assets/react.svg";
import { Button } from "../Button";
import cls from "./Header.module.css";

export const Header = () => {
  return (
    <header className={cls.header}>
      <p>
        <img src={ReactLogo} alt="" />
        <span>ReactCards</span>
      </p>
      <div className={cls.headerButtons}>
        <Button isDisabled={true}>Add</Button>
        <Button>LogIn</Button>
      </div>
    </header>
  );
};
