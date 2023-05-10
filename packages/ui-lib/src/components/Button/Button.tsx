import * as React from 'react';

type ReactButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

interface ButtonProps extends ReactButtonProps {
  color?: 'default' | 'primary' | 'secondary';
}

export function Button({
  className,
  color = 'default',
  children,
  onClick,
}: ButtonProps) {
  const classes = [];

  if (className) {
    classes.push(className);
  }

  classes.push('button button--contained button--small');

  switch (color) {
    case 'default': {
      classes.push('button--contained-default');
      break;
    }
    case 'primary': {
      classes.push('button--contained-primary');
      break;
    }
    case 'secondary': {
      classes.push('button--contained-secondary');
      break;
    }
  }

  return (
    <button className={classes.join(' ')} onClick={onClick}>
      {children}
    </button>
  );
}
