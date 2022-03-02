import { FC } from "react";

/**
 * Wrapper for button component
 */
 interface ButtonProps {
  handleClick:(e:  React.MouseEvent<HTMLButtonElement>) => void;
  text: string;
}

const Button: FC<ButtonProps> = ({ handleClick, text}) => (
  <div data-testid="Button">
    <button onClick={handleClick}>{text}</button>
  </div>
);
export default Button;