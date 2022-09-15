import React from 'react';
import styles from './layout.css';

interface ILoyautProps {
  children?: React.ReactNode
}

export function Layout({ children }: ILoyautProps) {
  return (
    <div className={styles.layout}>
      {children}
    </div>
  );
}
