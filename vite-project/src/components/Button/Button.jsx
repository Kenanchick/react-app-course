import cls from "./Button.module.css";

//   const inlineStyles = {
//   color: "white",
// };

// const isPrimary = true;

// export const Button = () => {
//   // return <button className="btn">новая кнопочка</button>;

//   // return (
//   //   <button className="btn" style={inlineStyles}}>
//   //     новая кнопочка
//   //   </button>
//   // );

//   // return (
//   //   <button className={isPrimary ? cls.primary : cls.btn}>
//   //     новая кнопочка
//   //   </button>
//   // );

//   return (
//     <button className={`${cls.btn} ${isPrimary ? cls.primary : ""}`}>
//       новая кнопочка
//     </button>
//   );
// };

//Props без деструктуризации
// export const Button = (props) => {
//   console.log(props);
//   return (
//     <button className={cls.btn} onClick={props.onClick}>
//       {props.children}
//     </button>
//   );
// };

//Props с деструктуризацией
export const Button = ({ onClick, children }) => {
  return (
    <button className={cls.btn} onClick={onClick}>
      {children}
    </button>
  );
};
