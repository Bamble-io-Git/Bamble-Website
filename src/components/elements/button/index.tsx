import { HTMLAttributes } from "react";

interface IButton extends HTMLAttributes<HTMLButtonElement> {
  text: string;
  handleClick: () => void;
}

const Button = ({ text, handleClick, ...otherProps }: IButton) => {
  return (
    <button onClick={handleClick} {...otherProps}>
      {text}
    </button>
  );
};

export default Button;
