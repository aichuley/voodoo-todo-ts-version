import "./ButtonControl.css";
import { actionInterface } from "../const";

interface ButtonTypes {
  selected: string;
  option: actionInterface;
  onClick: (S: string) => void;
  disabled?: boolean;
}

const ButtonControl = ({
  selected,
  option,
  onClick,
  disabled,
}: ButtonTypes) => {
  const classNameString = `button ${
    selected === option.action ? "selected" : ""
  } ${disabled ? "disabled" : ""}`;

  return (
    <button
      className={classNameString}
      onClick={() => onClick(option.action)}
      disabled={disabled}
    >
      {option.name}
    </button>
  );
};

export default ButtonControl;
