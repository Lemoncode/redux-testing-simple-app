import * as React from 'react';

interface Props {
  label : string;
  onClick : () => void;  
}

const onClickButton = (props : Props) => (e : React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault();
  props.onClick();
}

export const Button : React.StatelessComponent<Props> = (props) => {

  return (
    <button type="button"
      className="btn btn-default"
      onClick={onClickButton(props)}
    >
      {props.label}
    </button>
  );
}