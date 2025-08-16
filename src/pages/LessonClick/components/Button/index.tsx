import React from 'react'
import styles from './index.module.scss'

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button = ({ children, onClick }: ButtonProps) => {
  return <div className={styles.button} onClick={onClick}>{children}</div>
}

export default React.memo(Button);
