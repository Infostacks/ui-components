import React from 'react';

export interface SaveButtonProps {
  label: string;
}

const SaveButton = (props: SaveButtonProps) => {
  return <button>{props.label}</button>;
};

export default SaveButton;