import { HTMLAttributes } from 'react';

export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {}

export const Button = (props: ButtonProps) => {
  const handleClick = () => {
    alert('click Button ');
  };

  return <button onClick={handleClick} {...props} />;
};
