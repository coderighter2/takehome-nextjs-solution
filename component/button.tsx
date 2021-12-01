import React from 'react';
import styles from '../styles/Home.module.css';

type Props = {
  text: string;
  onClick: any;
};
const Button: React.FC<Props> = ({ text, onClick }) => {
  return (
    <button type="button" className={styles.button} onClick={onClick}>
      {text}
    </button>
  );
};
export default Button;
