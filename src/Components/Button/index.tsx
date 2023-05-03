import React from "react";

const Button = ({
  disabled,
  text,
  onClick,
}: {
  disabled?: boolean;
  text?: any;
  onClick?: () => void;
}) => {
  return (
    <div>
      <button className={`${ disabled? 'disabled' : 'btn'}`} onClick={onClick}>
        {text}
      </button>
    </div>
  );
};

export default Button;
